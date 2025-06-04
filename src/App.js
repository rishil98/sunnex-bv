
import React from "react";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ textAlign: "center", padding: "8rem 1rem", background: "linear-gradient(to bottom, black, #1f1f1f)" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>SUNNEX BV</h1>
        <p style={{ fontSize: "1.25rem", fontStyle: "italic", marginBottom: "1.5rem" }}>Where Brilliance Begins.</p>
        <button style={{ backgroundColor: "white", color: "black", padding: "0.5rem 1rem", cursor: "pointer" }}>Explore Our Legacy</button>
      </div>

      <section style={{ padding: "5rem 2rem", backgroundColor: "#1f1f1f" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", textAlign: "center", marginBottom: "2rem" }}>About Us</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.125rem", color: "#ccc" }}>
          <p>
            Founded in 1968, SUNNEX BV carries forward a legacy of precision,
            integrity, and excellence in the diamond industry. We believe that
            every gem tells a story — and we’re here to help you tell yours.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem", backgroundColor: "black" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", textAlign: "center", marginBottom: "2rem" }}>Custom Orders</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.125rem", color: "#ccc" }}>
          <p>
            We specialize in custom diamond pieces tailored to your vision.
            From concept to creation, our process is collaborative, precise,
            and luxurious.
          </p>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button style={{ backgroundColor: "white", color: "black", padding: "0.5rem 1rem", cursor: "pointer" }}>
              Start Your Custom Design
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem", backgroundColor: "#1f1f1f" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", textAlign: "center", marginBottom: "2rem" }}>Contact Us</h2>
        <div style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.125rem", color: "#ccc" }}>
          <p>Email: contact@sunnexbv.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: Antwerp, Belgium</p>
        </div>
      </section>

      <footer style={{ backgroundColor: "black", textAlign: "center", padding: "1.5rem 0", borderTop: "1px solid #555" }}>
        <p style={{ fontSize: "0.875rem", color: "#888" }}>© 2025 SUNNEX BV. All rights reserved.</p>
      </footer>
    </div>
  );
}
