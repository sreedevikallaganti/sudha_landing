import React from 'react'
import Link from 'next/link'

const Pricing = () => {
  return (
    <section className="section" id="pricing">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Pay once, own it</span>
      <h2>Simple pricing. No subscriptions.</h2>
      <p>One-time setup — the platform runs on infrastructure we host, so you never touch a server.</p>
    </div>
    <div className="pricing-grid">
      <div className="price-card">
        <div className="price-tag">Starter</div>
        <div className="price-amt">AED 1,290</div>
        <div className="price-note">one-time</div>
        <ul className="feat-list">
          <li><span className="check">✓</span>1 site on a Suhba subdomain</li>
          <li><span className="check">✓</span>Real-time booking engine</li>
          <li><span className="check">✓</span>Basic CRM & lead inbox</li>
          <li><span className="check">✓</span>English only</li>
        </ul>
        <a href="#" className="btn btn-ghost" style={{width:"100%"}}>Get started</a>
      </div>
      <div className="price-card featured">
        <div className="price-tag">Growth · Most popular</div>
        <div className="price-amt">AED 2,490</div>
        <div className="price-note">one-time</div>
        <ul className="feat-list">
          <li><span className="check">✓</span>Custom domain + free SSL</li>
          <li><span className="check">✓</span>Full CRM & pipeline</li>
          <li><span className="check">✓</span>WhatsApp inbound & reminders</li>
          <li><span className="check">✓</span>Page builder (CMS)</li>
          <li><span className="check">✓</span>English & Arabic (RTL)</li>
        </ul>
        <a href="#" className="btn btn-gold" style={{width:"100%"}}>Get started</a>
      </div>
      <div className="price-card">
        <div className="price-tag">Multi-location</div>
        <div className="price-amt">AED 4,990</div>
        <div className="price-note">one-time</div>
        <ul className="feat-list">
          <li><span className="check">✓</span>Multiple branches, one login</li>
          <li><span className="check">✓</span>Staff roles & permissions</li>
          <li><span className="check">✓</span>Priority support</li>
          <li><span className="check">✓</span>Everything in Growth</li>
        </ul>
        <a href="#" className="btn btn-ghost" style={{width:"100%"}}>Talk to us</a>
      </div>
    </div>
    <p className="price-foot">Payment processing (Telr, Ziina, Stripe) and WhatsApp messaging beyond the free tier are billed at cost, passed through directly — never marked up.</p>
  </div>
</section>
  )
}

export default Pricing