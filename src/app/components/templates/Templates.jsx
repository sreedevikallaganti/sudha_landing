import React from 'react'
import Link from 'next/link'

const Templates = () => {
  return (
    <section className="section" id="templates">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Three starting points</span>
      <h2>Every template, glass-smooth by default.</h2>
      <p>Start from one of these, then adjust colors, type, and layout to match your brand.</p>
    </div>
    <div className="gallery">
      <div className="swatch">
        <div className="swatch-preview pill"><div className="chip">Pill nav · Soft sand</div><div className="blob"></div></div>
        <div className="swatch-info"><h3>Porcelain</h3><p>Warm, minimal, editorial — for clinics and consultancies.</p></div>
      </div>
      <div className="swatch">
        <div className="swatch-preview glass"><div className="chip" style={{ background:"rgba(255,255,255,0.15)", color:"#fff"}}>Frosted hero</div><div className="blob"></div></div>
        <div className="swatch-info"><h3>Oasis Glass</h3><p>Deep emerald, glossy cards — for studios and lounges.</p></div>
      </div>
      <div className="swatch">
        <div className="swatch-preview frost"><div className="chip">Gold accent</div><div className="blob"></div></div>
        <div className="swatch-info"><h3>Dune Gold</h3><p>Bright, warm, confident — for salons and boutiques.</p></div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Templates