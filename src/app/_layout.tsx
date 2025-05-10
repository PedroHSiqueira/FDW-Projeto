import { AuthProvider, useAuth } from "../context/AuthContext";
import Footer from "../components/menuBar";
import Navbar from "../components/navbar";
import "../styles/global.css";

import { router, Slot } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}

function MainLayout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user);
        router.replace("/logada")
        return
      } 

      setAuth(null);
      router.replace("/(home)/(Auth)/login/page")
    })
  }, []);

  return (
    <>
      <Navbar />
      <Slot />
      <Footer />
    </>
  );
}
