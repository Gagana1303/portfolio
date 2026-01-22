import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      setMessages(data || []);
    };

    fetchMessages();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "#fff",
        padding: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h2>Admin Dashboard</h2>

        <button
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.href = "/admin/login";
          }}
          style={{
            padding: "8px 16px",
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Messages */}
      {messages.length === 0 && (
        <p style={{ opacity: 0.7 }}>No messages yet</p>
      )}

      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            background: "#1c1c1c",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <strong>{msg.name}</strong>{" "}
            <span style={{ opacity: 0.7 }}>({msg.email})</span>
          </div>

          <p style={{ margin: 0 }}>{msg.message}</p>
        </div>
      ))}
    </div>
  );
}
