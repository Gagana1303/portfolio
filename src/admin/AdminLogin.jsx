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
      backgroundColor: "#0f0f0f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
    }}
  >
    <div
      style={{
        width: "320px",
        padding: "20px",
        background: "#1c1c1c",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>

 <input
  type="email"
  autoComplete="off"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  autoComplete="new-password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>


      <button
        onClick={login}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Login
      </button>
    </div>
  </div>
);

}
