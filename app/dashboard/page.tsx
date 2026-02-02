"use client";
import { useState } from "react";

export default function Dashboard() {
  const [items, setItems] = useState<string[]>([]);

  function addItem() {
    setItems([...items, "New customer"]);
  }

  return (
    <main style={{ padding: 40, background: "#0a0a0a", color: "white", minHeight: "100vh" }}>
      <h1>Tradeline Dashboard</h1>

      <button onClick={addItem} style={{ padding: 10, marginTop: 20 }}>
        Add Customer
      </button>

      <ul style={{ marginTop: 20 }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
