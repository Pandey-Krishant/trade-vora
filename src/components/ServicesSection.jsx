import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Sections.css';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    { title: "Market Signals", desc: "Real-time, high-probability trade setups.", icon: "📈" },
    { title: "Deep Analysis", desc: "Fundamental and technical reports.", icon: "🔍" },
    { title: "Risk Management", desc: "Capital preservation strategies.", icon: "🛡️" },
    { title: "Mentorship", desc: "1-on-1 guidance from elite traders.", icon: "👨‍🏫" }
  ];

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section className="section bg-cream" id="operations" ref={sectionRef}>
      <div className="section-header text-center">
        <h3 className="section-subtitle">OUR OPERATIONS</h3>
        <h2 className="section-title">Comprehensive Market Solutions</h2>
      </div>
      <div className="services-grid-large">
        {services.map((srv, idx) => (
          <div 
            className="service-card-large" 
            key={idx} 
            ref={el => cardsRef.current[idx] = el}
          >
            <div className="icon-wrapper">{srv.icon}</div>
            <h4>{srv.title}</h4>
            <p>{srv.desc}</p>
            <a href="#" className="read-more">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
