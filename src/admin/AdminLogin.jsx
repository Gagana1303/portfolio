import { useState } from "react";
import { supabase } from "../lib/supabase";



export default function AdminLogin() {
    console.log("ADMIN LOGIN COMPONENT RENDERED")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const login = async () => {
  console.log("LOGIN CLICKED");

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log("LOGIN ERROR", error);
    alert(error.message);
  } else {
    console.log("LOGIN SUCCESS");
     window.location.href = "/admin/Messages";
  }
};


 return (
  <div
    style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      paddingTop: "120px",   // 👈 moves content down
      display: "flex",
      justifyContent: "center",
      color: "#fff",
    }}
  >
    <div
      style={{
        width: "380px",
        padding: "28px",
        background: "#1c1c1c",
        borderRadius: "10px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
      }}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "left" }}>
        Admin Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "12px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "16px",
        }}
      />

      <button
        onClick={login}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  </div>
);


}
