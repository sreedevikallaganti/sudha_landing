"use client"

import { useEffect } from "react";
import Link from "next/link"

const hero = () => {

  useEffect(() => {
    const device = document.getElementById('device');
    const stage = document.querySelector('.device-stage');

    if (device && stage) {
      stage.addEventListener('mousemove', (e) => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        device.style.transform = `rotateX(${6 - y * 8}deg) rotateY(${-2 + x * 10}deg)`;
      });

      stage.addEventListener('mouseleave', () => {
        device.style.transform = 'rotateX(6deg) rotateY(-2deg)';
      });
    }
  }, []);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Made for UAE service businesses</span>
          <h1>Launch a premium booking website <em>in minutes</em>, not months.</h1>
          <p className="lead">One elegant platform for your storefront, bookings, and customer relationships — built for clinics, salons, studios, and consultants across the Emirates.</p>
          <div className="hero-ctas">
            <a href="#pricing" className="btn btn-gold">Start free</a>
            <a href="#how" className="btn btn-ghost">See how it works →</a>
          </div>
          <span className="hero-note">PAY ONCE · NO SUBSCRIPTIONS · LIVE ON YOUR DOMAIN TODAY</span>
        </div>
      </div>

      <div className="wrap device-stage">
        <div className="device" id="device">
          <div className="browser">
            <div className="browser-bar">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="url">yourclinic.ae</div>
            </div>
            <div className="browser-body">
              <div className="mock-hero">
                <span className="mini-label">① Your customer books online</span>
                <div className="mock-title">Marina Wellness Studio</div>
                <div className="mock-sub">Deep tissue · Dubai Marina · From AED 250</div>
                <div className="mock-slots">
                  <span className="slot">10:00</span>
                  <span className="slot active">11:30 ✓</span>
                  <span className="slot">13:00</span>
                  <span className="slot">15:30</span>
                  <span className="slot">17:00</span>
                </div>
                <div className="avatar-row"><span></span><span></span><span></span></div>
              </div>
              <div className="card">
                <span className="mini-label">② You get it in your CRM</span>
                <div className="mock-title" style={{fontSize:"16px"}}>Amina K. · New booking</div>
                <div className="mock-sub">Came in via WhatsApp: "Is 11:30 free tomorrow?"</div>
                <div className="mock-slots" style={{ marginTop:"14px" }}>
                  <span className="slot active">Reminder sent ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flow-connector">No spreadsheets, no missed messages — every booking becomes a customer record automatically.</div>
      </div>
    </section>
  )
}

export default hero;