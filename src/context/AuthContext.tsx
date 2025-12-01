import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "../lib/supabase";
import type { User, Session, AuthError } from "@supabase/supabase-js";
import { toast } from "sonner";

interface Profile {
  id: string;
  email: string;
  username: string;
  profile_picture?: string;
  badge?: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    username: string
  ) => Promise<{ error: AuthError | null }>;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("Profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching profile:", error);
      return null;
    }

    return data as Profile | null;
  };

  useEffect(() => {
    let isMounted = true;
    let loadingTimeout: ReturnType<typeof setTimeout> | undefined;

    const finishLoading = () => {
      if (isMounted) {
        setLoading(false);
      }
    };

    const init = async () => {
      try {
        // Safety timeout to avoid being stuck in loading forever
        loadingTimeout = setTimeout(finishLoading, 5000);

        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!isMounted) return;

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          fetchProfile(session.user.id)
            .then((profileData) => {
              if (isMounted) setProfile(profileData);
            })
            .catch((error) => {
              console.error("Error fetching profile:", error);
            });
        } else {
          setProfile(null);
        }
      } catch (error) {
        console.error("Error during auth init:", error);
      } finally {
        finishLoading();
        if (loadingTimeout) {
          clearTimeout(loadingTimeout);
        }
      }
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (session?.user) {
        fetchProfile(session.user.id)
          .then((profileData) => {
            if (isMounted) setProfile(profileData);
          })
          .catch((error) => {
            console.error("Error fetching profile:", error);
          });
      } else {
        // SIGNED_OUT, USER_DELETED, TOKEN_REFRESHED with null session, etc.
        setProfile(null);
      }

      finishLoading();
    });

    return () => {
      isMounted = false;
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, username: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: username,
        },
      },
    });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error during sign out:", error);
      toast.error("Could not sign out. Please try again.");
      return;
    }
    // Local state cleanup in case the event listener lags / fails
    setSession(null);
    setUser(null);
    setProfile(null);
  };

  const value = {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
