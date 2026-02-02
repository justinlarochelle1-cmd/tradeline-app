export default function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: 240,
        background: "#111",
        color: "white",
        padding: 20
      }}>
        <h2>Tradeline</h2>
        <p style={{ opacity: 0.6 }}>Dashboard</p>
      </aside>

      {/* Main content */}
      <main style={{
        flex: 1,
        padding: 40,
        background: "#0a0a0a",
        color: "white"
      }}>
        <h1>Welcome</h1>
        <p>Your software starts here.</p>
      </main>
    </div>
  );
}
