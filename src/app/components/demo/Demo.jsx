import React from "react";
import Link from "next/link";

const Demo = () => {
  return (
    <section className="section" style={{ paddingTop: "0" }}>
      <div className="wrap">
        <div className="final-cta">
          <h2>Your storefront could be live by tonight.</h2>

          <p>
            Start free, pick a template, and take your first booking today.
          </p>

          <div className="hero-ctas">
            <a href="#" className="btn btn-gold">
              Start free
            </a>

            <a
              href="#"
              className="btn btn-ghost"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                color: "#fff",
              }}
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;