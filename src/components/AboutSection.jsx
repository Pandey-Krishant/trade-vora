import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    // Fade in and slide up text
    gsap.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax image
    gsap.fromTo(imgRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="section bg-white" id="about" ref={sectionRef}>
      <div className="section-content">
        <div className="text-content" ref={textRef}>
          <h3 className="section-subtitle">ABOUT MARKET INVESTOPEDIA</h3>
          <h2 className="section-title">Decode Markets. Dominate Decisions.</h2>
          <p>
            We decode markets through deep analysis, smart insights, and precision-driven research. 
            Our mission is to empower traders and investors with clarity, confidence, and knowledge.
          </p>
          <ul className="feature-list">
            <li><span className="check-icon">✔</span> Elite Market Intelligence</li>
            <li><span className="check-icon">✔</span> Next Generation Trading Strategies</li>
            <li><span className="check-icon">✔</span> Proven Risk Management</li>
          </ul>
          <button className="btn btn-primary mt-4">Discover Our Edge</button>
        </div>
        <div className="image-wrapper" ref={imgRef}>
          <div className="image-content bg-placeholder-1">
             <div className="overlay-graphic"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
