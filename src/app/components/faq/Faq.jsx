"use client"

import { useEffect } from 'react';
import React from 'react'

const Faq = () => {
     useEffect(() => {
    const items = document.querySelectorAll(".faq-item");

    items.forEach((item) => {
      item.querySelector(".faq-q").addEventListener("click", () => {
        const wasOpen = item.classList.contains("open");

        items.forEach((i) => i.classList.remove("open"));

        if (!wasOpen) {
          item.classList.add("open");
        }
      });
    });
  }, []);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Good to know</span>
          <h2>Questions, answered.</h2>
        </div>

        <div className="faq">
          <div className="faq-item open">
            <div className="faq-q">
              <span>Is it really a one-time payment?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes. The tier price covers setup and hosting on Suhba's
                infrastructure for the life of your site. Payment gateway fees
                and WhatsApp messaging beyond the free monthly allowance are
                billed at cost, shown clearly in your dashboard.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">
              <span>Can I use my own .ae domain?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Yes, from the Growth tier up. Point your domain at us and SSL is
                issued automatically, usually within minutes.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">
              <span>Does it support Arabic?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Growth and Multi-location tiers include full English/Arabic
                sites with true right-to-left layouts, not a mirrored template.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-q">
              <span>What kind of businesses is this for?</span>
              <span className="plus">+</span>
            </div>
            <div className="faq-a">
              <p>
                Any UAE service business that takes bookings — clinics, salons,
                studios, fitness, consulting, automotive, and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;