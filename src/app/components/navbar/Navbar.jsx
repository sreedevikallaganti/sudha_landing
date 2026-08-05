"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-outer">
      <nav>

        {/* Logo */}
        <div className="brand">
          <span className="dot"></span>
          Subha
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link href="#features">Features</Link>
          <Link href="#how">How it works</Link>
          <Link href="#templates">Templates</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="nav-cta-group">
          <Link href="#pricing" className="btn btn-ghost">
            Book a Demo
          </Link>

          <Link href="#pricing" className="btn btn-primary">
            Start Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <Link href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </Link>

          <Link href="#how" onClick={() => setMenuOpen(false)}>
            How it works
          </Link>

          <Link href="#templates" onClick={() => setMenuOpen(false)}>
            Templates
          </Link>

          <Link href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>

          <Link href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>

          <Link
            href="#pricing"
            className="btn btn-ghost"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo
          </Link>

          <Link
            href="#pricing"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Start Free
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;