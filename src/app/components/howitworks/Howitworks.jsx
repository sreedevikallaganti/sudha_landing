import React from 'react'
import Link from 'next/link'

const Howitworks = () => {
  return (
    <section className="section" id="how" style={{ paddingTop: "0" }}>
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">From idea to live</span>
      <h2>Three steps, one afternoon.</h2>
    </div>
    <div className="steps">
      <div className="step">
        <span className="num">01</span>
        <h3>Tell us your business</h3>
        <p>Pick your type — clinic, salon, studio, consultancy — and we pre-fill the categories and fields you'll actually use.</p>
        <span className="step-arrow">→</span>
      </div>
      <div className="step">
        <span className="num">02</span>
        <h3>Add services & hours</h3>
        <p>Prices, durations, staff, and blackout dates. Your booking engine configures itself around them.</p>
        <span className="step-arrow">→</span>
      </div>
      <div className="step">
        <span className="num">03</span>
        <h3>Go live</h3>
        <p>Choose a template, connect payments, and publish — on a Suhba subdomain or your own .ae domain.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Howitworks


