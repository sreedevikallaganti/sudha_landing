import React from 'react'
import Link from 'next/link'

const Features = () => {
  return (
    <section className="section" id="features">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Everything, in one place</span>
      <h2>The site, the bookings, and the customer memory — finally together.</h2>
      <p>No more juggling a website builder, a booking app, and a spreadsheet of clients.</p>
    </div>
    <div className="feature-grid">
      <div className="feature-card">
        <div className="feature-icon">✦</div>
        <h3>Instant branded site</h3>
        <p>A polished storefront on your subdomain today, your own domain whenever you're ready.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">◐</div>
        <h3>Real-time booking</h3>
        <p>Staff hours, blackout days, and buffer times — customers only ever see slots you can actually take.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">◆</div>
        <h3>Native CRM</h3>
        <p>Every booking and enquiry becomes a customer record — no separate tool, no exporting CSVs.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">☏</div>
        <h3>WhatsApp-first</h3>
        <p>Leads land straight in your inbox, and confirmations, reminders go out where clients actually read.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">⬒</div>
        <h3>Your own domain</h3>
        <p>Free SSL, issued automatically the moment you point your domain our way.</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">文</div>
        <h3>English & Arabic</h3>
        <p>True right-to-left layouts, not a mirrored afterthought — for your site and your team.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Features

