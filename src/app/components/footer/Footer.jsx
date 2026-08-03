import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div
            className="footer-col"
            style={{ maxWidth: "260px" }}
          >
            <div
              className="brand"
              style={{ marginBottom: "14px" }}
            >
              <span className="dot"></span>
              Suhba
            </div>

            <p style={{ fontSize: "13.5px" }}>
              Storefront, booking, and CRM for UAE service businesses —
              self-hosted, UAE payments-native.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link href="#features">Features</Link>
            <Link href="#templates">Templates</Link>
            <Link href="#pricing">Pricing</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Book a demo</Link>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="#">Privacy (PDPL)</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookie policy</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Suhba. Made for the UAE.</span>
          <span>Dubai · Abu Dhabi · Sharjah</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;