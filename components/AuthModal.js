import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function AuthModal() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-black/80 flex flex-col justify-center items-center space-y-4 py-10">
        <h1 className="text-white">Todo Sign in!</h1>
        <p className="text-white">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="border-purple-500 border-4 rounded-md bg-transparent text-white placeholder:text-white"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            className="px-5 py-3.5 bg-purple-500 text-white rounded-md"
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
