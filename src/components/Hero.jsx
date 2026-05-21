import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Scroll trigger animation: Hero image goes up and fades out slightly when scrolling down
    gsap.to(heroRef.current, {
      yPercent: -50,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false
      }
    });
  }, []);

  return (
    <div className="hero-container" ref={heroRef}>
      {/* Fallback layout mimicking the image in case the image src isn't set */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="logo-placeholder">
            {/* Using a pseudo-element or CSS for the candlestick logo */}
            <div className="candlestick-group">
              <div className="candle blue-candle"></div>
              <div className="candle gold-candle"></div>
              <div className="candle blue-candle"></div>
            </div>
          </div>
          <h1>TRADE VIORA</h1>
          <p className="hero-subtitle">UNDERSTAND MARKET ANALYZE DEEPER EMPOWER TRADERS</p>
        </div>
        <div className="hero-right">
          <h2>Decode Markets. Dominate Decisions</h2>
          <p className="elite-text">Elite market intelligence for the next generation</p>
          <p className="desc-text">
            Trade Viora is a modern financial market intelligence firm.
            We decode markets through deep analysis, smart insights,
            and precision-driven research. Our mission is to empower
            traders and investors with clarity, confidence, and knowledge.
          </p>
          <button className="btn btn-primary resource-btn">RESOURCE HUB</button>
        </div>
      </div>
    </div>
  );
}
