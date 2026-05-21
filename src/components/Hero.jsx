import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

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
          <div className="video-container">
            {!videoFailed && (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={`hero-video ${videoReady ? 'is-ready' : ''}`}
                onCanPlay={() => setVideoReady(true)}
                onError={() => setVideoFailed(true)}
              >
                <source
                  src="/videos/candlestick.mp4"
                  type="video/mp4"
                />
              </video>
            )}
            <div className={`video-fallback ${videoReady && !videoFailed ? 'is-hidden' : ''}`}>
              <div className="market-grid"></div>
              <div className="market-line line-one"></div>
              <div className="market-line line-two"></div>
              <div className="market-candles">
                <span style={{ '--h': '58%', '--d': '0s' }}></span>
                <span style={{ '--h': '34%', '--d': '.12s' }}></span>
                <span style={{ '--h': '72%', '--d': '.24s' }}></span>
                <span style={{ '--h': '45%', '--d': '.36s' }}></span>
                <span style={{ '--h': '82%', '--d': '.48s' }}></span>
                <span style={{ '--h': '39%', '--d': '.6s' }}></span>
                <span style={{ '--h': '66%', '--d': '.72s' }}></span>
              </div>
              <div className="video-badge">LIVE MARKET VIEW</div>
            </div>
          </div>
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
