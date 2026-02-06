import React from "react";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      {token ? (
        <div>
          <p>Welcome! Your JWT token is:</p>
          <code>{token}</code>
        </div>
      ) : (
        <p>Please login to see your dashboard.</p>
      )}
    </div>
  );
}
