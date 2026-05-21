import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../components/Pages.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: '📈',
    title: 'Forex Trading Education',
    desc: 'The foreign exchange market is the largest and most liquid financial market in the world, trading over $7.5 trillion daily. Our Forex program covers everything from major/minor/exotic currency pairs, central bank policy analysis, technical chart patterns, and risk management frameworks used by professional traders.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=400&fit=crop',
    features: ['Currency pair analysis & fundamentals', 'Central bank policy & macroeconomics', 'Chart patterns & technical signals', 'Live trading sessions & mentorship'],
  },
  {
    icon: '₿',
    title: 'Cryptocurrency Markets',
    desc: 'Digital assets have redefined financial markets. Our crypto curriculum covers blockchain fundamentals, DeFi protocols, altcoin analysis, market cycles, and advanced on-chain analytics. We teach you to navigate the volatile crypto landscape using data-driven methodologies rather than speculation.',
    img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=700&h=400&fit=crop',
    features: ['Blockchain & DeFi fundamentals', 'On-chain analytics & market cycles', 'Bitcoin & altcoin investment strategy', 'Risk management in volatile markets'],
  },
  {
    icon: '🪙',
    title: 'Commodities Trading',
    desc: 'Gold, silver, crude oil, natural gas—commodities are the building blocks of the global economy. Learn how geopolitical events, supply-demand dynamics, and macroeconomic trends drive commodity prices. Our experts have decades of experience trading physical and derivatives commodity markets.',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=700&h=400&fit=crop',
    features: ['Gold & precious metals analysis', 'Energy markets: oil & natural gas', 'Agricultural commodities', 'Futures & options strategies'],
  },
  {
    icon: '📊',
    title: 'Stock Market & Equities',
    desc: 'Understand how to analyze businesses, read financial statements, and identify undervalued stocks before the market does. Our equity curriculum covers fundamental analysis, valuation models, sector rotation, and portfolio construction principles used by top fund managers.',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=700&h=400&fit=crop',
    features: ['Fundamental & valuation analysis', 'Sector rotation strategies', 'Portfolio construction', 'Earnings analysis & guidance'],
  },
  {
    icon: '🌐',
    title: 'Global Market Indices',
    desc: 'Indices like the S&P 500, Nasdaq 100, FTSE, Nikkei, and DAX are the pulse of the global economy. Learn how macroeconomic data, corporate earnings seasons, and geopolitical events move these benchmarks—and how to position your portfolio accordingly.',
    img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=700&h=400&fit=crop',
    features: ['S&P 500, Nasdaq & Dow Jones', 'European & Asian indices', 'Index futures & ETF strategies', 'Global macro correlation analysis'],
  },
];

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '',
    desc: 'Perfect for absolute beginners exploring the world of trading.',
    features: ['Introduction to Forex & Stocks', '5 free video lessons', 'Community forum access', 'Weekly market newsletter'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/month',
    desc: 'Full curriculum access for serious traders ready to level up.',
    features: ['All 5 market courses', 'Live trading sessions (3x/week)', 'Real-time signal alerts', 'Private Discord community', 'Monthly 1-on-1 mentor call', 'All research reports'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Elite',
    price: '$1499',
    period: '/month',
    desc: 'Institutional-grade intelligence for professional traders.',
    features: ['Everything in Professional', 'Daily market briefings', 'Priority signal alerts', 'Unlimited mentor access', 'Portfolio review sessions', 'Exclusive webinars', 'Custom research requests'],
    cta: 'Join Elite',
    highlight: false,
  },
  
  {
    name: 'Legend',
    price: '$4999',
    period: '/month',
    desc: 'The ultimate trading powerhouse for elite investors and hedge-level execution.',
    features: [
      'Everything in Elite',
      '24/7 VIP mentor support',
      'AI-powered trading strategies',
      'Private mastermind group',
      'Institutional market insights',
      'Exclusive hedge fund strategies',
      'Direct portfolio management guidance',
      'Early access to new trading tools',
      'Personal risk-management coaching',
    ],
    cta: 'Become a Legend',
    highlight: true,
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const serviceRefs = useRef([]);
  const planRefs = useRef([]);
  const processRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('h1, p, .breadcrumb'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
      );
    }

    serviceRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        }
      );
    });

    gsap.fromTo(planRefs.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: planRefs.current[0], start: 'top 85%' }
      }
    );

    if (processRef.current) {
      gsap.fromTo(processRef.current.querySelectorAll('.process-step'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 80%' }
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div>
      {/* ─── HERO ─── */}
      <div className="page-hero" ref={heroRef}>
        <div className="page-hero-inner">
          <p className="breadcrumb">Home / <span>Services</span></p>
          <h1>Our Trading Education Services</h1>
          <p>From Forex to Crypto, Stocks to Commodities—comprehensive market education delivered by institutional traders with decades of real-world experience.</p>
        </div>
      </div>

      {/* ─── INTRO ─── */}
      <div className="full-section" style={{ background: '#fff' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">WHAT WE OFFER</span>
          <h2 className="section-heading">Education Across Every <span>Major Market</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Our curriculum is designed by active market professionals—not academics. Every lesson, signal, and strategy is battle-tested in live markets.</p>
          <div className="cards-grid-4" style={{ marginTop: 60 }}>
            {[
              { icon: '📈', label: 'Forex Markets' },
              { icon: '₿', label: 'Cryptocurrency' },
              { icon: '🪙', label: 'Commodities' },
              { icon: '📊', label: 'Stocks & Indices' },
            ].map((m, i) => (
              <div key={i} style={{ background: '#faf5eb', borderRadius: 16, padding: '30px 20px', textAlign: 'center', border: '2px solid transparent', transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{m.icon}</div>
                <p style={{ fontWeight: 700, color: 'var(--primary-blue)', fontSize: '1rem' }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES DETAIL ─── */}
      {services.map((svc, i) => (
        <div
          key={i}
          ref={el => serviceRefs.current[i] = el}
          className="full-section"
          style={{ background: i % 2 === 0 ? '#faf5eb' : '#fff' }}
        >
          <div className="full-section-inner">
            <div className={`two-col ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="col-image">
                <img src={svc.img} alt={svc.title} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=400&fit=crop'; }} />
              </div>
              <div className="col-text">
                <span className="section-badge">SERVICE {String(i + 1).padStart(2, '0')}</span>
                <h2>{svc.icon} {svc.title}</h2>
                <p>{svc.desc}</p>
                <ul className="feature-list-v2">
                  {svc.features.map((f, j) => (
                    <li key={j}><span className="fcheck">✓</span>{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: 25, display: 'inline-block' }}>Enroll Now →</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ─── HOW IT WORKS ─── */}
      <div className="full-section" style={{ background: '#0d1f3c' }} ref={processRef}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">THE PROCESS</span>
          <h2 className="section-heading" style={{ color: '#fff' }}>How Our <span>Learning System</span> Works</h2>
          <div className="process-steps" style={{ marginTop: 70 }}>
            {[
              { num: '01', title: 'Assess Your Level', desc: 'Take our free assessment quiz to determine your current knowledge level and ideal learning path.' },
              { num: '02', title: 'Choose Your Market', desc: 'Select which market(s) you want to master: Forex, Crypto, Stocks, Commodities or All.' },
              { num: '03', title: 'Learn with Experts', desc: 'Access video lessons, live sessions, and real-time analysis from our professional analyst team.' },
              { num: '04', title: 'Trade & Grow', desc: 'Apply your knowledge in live markets with mentor support and real-time signal alerts.' },
            ].map((p, i) => (
              <div className="process-step" key={i}>
                <div className="step-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PRICING ─── */}
      <div className="full-section" style={{ background: '#fff' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">PRICING</span>
          <h2 className="section-heading">Choose Your <span>Learning Plan</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Flexible plans designed to suit every trader—from beginners to professionals.</p>
          <div className="cards-grid-3" style={{ marginTop: 60, alignItems: 'start' }}>
            {plans.map((plan, i) => (
              <div
                key={i}
                ref={el => planRefs.current[i] = el}
                style={{
                  background: plan.highlight ? 'var(--primary-blue)' : '#fff',
                  borderRadius: 24,
                  padding: '45px 35px',
                  boxShadow: plan.highlight ? '0 30px 80px rgba(28,61,122,0.3)' : '0 10px 30px rgba(0,0,0,0.07)',
                  border: plan.highlight ? 'none' : '2px solid #f0f0f0',
                  transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                  position: 'relative',
                }}
              >
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gold)', color: '#fff', padding: '5px 20px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                )}
                <h3 style={{ color: plan.highlight ? '#fff' : 'var(--primary-blue)', fontSize: '1.3rem', marginBottom: 10 }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 12, justifyContent: 'center' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 800, color: plan.highlight ? 'var(--accent-gold)' : 'var(--primary-blue)' }}>{plan.price}</span>
                  <span style={{ color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-light)', paddingBottom: 8 }}>{plan.period}</span>
                </div>
                <p style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-light)', marginBottom: 28, fontSize: '0.9rem' }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 30 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{ marginBottom: 10, display: 'flex', gap: 10, fontSize: '0.9rem', color: plan.highlight ? 'rgba(255,255,255,0.85)' : 'var(--text-dark)' }}>
                      <span style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    background: plan.highlight ? 'var(--accent-gold)' : 'var(--primary-blue)',
                    color: '#fff',
                    padding: '14px',
                    borderRadius: 50,
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s',
                  }}
                >{plan.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="cta-banner">
        <h2>Not Sure Which Plan is Right For You?</h2>
        <p>Book a free 30-minute consultation with one of our market experts and we'll guide you to the perfect learning path.</p>
        <Link to="/contact" className="btn-white">Book Free Consultation</Link>
      </div>
    </div>
  );
}
