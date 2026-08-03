import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-outer">
      <nav>
        <div className="brand">
          <span className="dot"></span>
          Suhba
        </div>

        <div className="nav-links">
          <Link href="#features">Features</Link>
          <Link href="#how">How it works</Link>
          <Link href="#templates">Templates</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </div>

        <div className="nav-cta-group">
          <Link href="#pricing" className="btn btn-ghost">
            Book a demo
          </Link>

          <Link href="#pricing" className="btn btn-primary">
            Start free
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;