import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../components/Sections.css';

export default function ResourceHubPage() {
  const pageRef = useRef(null);
  const articlesRef = useRef([]);

  const articles = [
    { title: "Forex Outlook: FOMC & Inflation", date: "May 20, 2026", category: "Market News" },
    { title: "What is ADX (Average Directional Movement Index)?", date: "May 18, 2026", category: "Education" },
    { title: "Understanding Business Days in Trading", date: "May 15, 2026", category: "Education" },
    { title: "The Rise of Social Trading Bots", date: "May 10, 2026", category: "Technology" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    gsap.fromTo(pageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    
    gsap.fromTo(articlesRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  return (
    <div className="page-container bg-white" ref={pageRef} style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <section className="section">
        <div className="section-header text-center">
          <h3 className="section-subtitle">RESOURCE HUB</h3>
          <h2 className="section-title">Latest Market Insights & Education</h2>
        </div>
        
        <div className="section-content" style={{display: 'block'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
            {articles.map((article, idx) => (
              <div 
                key={idx} 
                ref={el => articlesRef.current[idx] = el}
                style={{
                  background: 'var(--bg-cream)', padding: '30px', borderRadius: '15px', 
                  borderTop: '4px solid var(--primary-blue)', cursor: 'pointer',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase'}}>{article.category}</span>
                <h4 style={{fontSize: '1.3rem', margin: '10px 0', color: 'var(--primary-blue)'}}>{article.title}</h4>
                <p style={{color: 'var(--text-light)', fontSize: '0.9rem'}}>{article.date}</p>
                <div style={{marginTop: '20px', color: 'var(--accent-gold)', fontWeight: '600', fontSize: '0.9rem'}}>Read Article →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
