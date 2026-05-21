import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import '../components/Pages.css';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '17+', label: 'Years of Experience' },
  { num: '50,000+', label: 'Students Trained' },
  { num: '98%', label: 'Success Rate' },
  { num: '120+', label: 'Countries Reached' },
];

const services = [
  { icon: '📈', title: 'Forex Trading', desc: 'Master currency markets with our expert-led forex education programs. From basics to advanced strategies, we cover everything.', img: 'https://marketinvestopedia.com/wp-content/uploads/2024/04/MI_logo_Color-1-1.png' },
  { icon: '₿', title: 'Crypto Markets', desc: 'Navigate the volatile world of cryptocurrency with data-driven analysis and risk management frameworks.', img: '' },
  { icon: '🪙', title: 'Commodities', desc: 'Understand gold, silver, oil and other commodities markets through our structured research approach.', img: '' },
  { icon: '📊', title: 'Stock Analysis', desc: 'Learn equity analysis, fundamental valuation and portfolio construction from seasoned professionals.', img: '' },
  { icon: '🌐', title: 'Market Indices', desc: 'Gain insights into global indices—S&P 500, Nasdaq, DAX, Nikkei—and learn how they move the world.', img: '' },
  { icon: '🎓', title: 'Trading Academy', desc: 'Structured courses from beginner to professional trader, delivered by industry veterans with proven track records.', img: '' },
];

const testimonials = [
  { name: 'Michael Anderson', role: 'Full-Time Trader', stars: 5, text: 'Trade Viora transformed my approach to the markets completely. The education here is unparalleled. Within 6 months I was consistently profitable.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face' },
  { name: 'Emily Carter', role: 'Forex Analyst', stars: 5, text: 'The in-depth research reports and live market sessions gave me real-world skills that no textbook can teach. Absolutely recommend!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face' },
  { name: 'Daniel Brooks', role: 'Crypto Investor', stars: 5, text: 'I had zero knowledge about crypto markets. After completing the course, I confidently manage my portfolio with consistent returns.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face' },
  { name: 'Sophia Bennett', role: 'Swing Trader', stars: 5, text: 'The mentorship sessions helped me stop guessing and start following a real trading process. The clarity is exactly what I needed.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face' },
  { name: 'James Wilson', role: 'Portfolio Manager', stars: 5, text: 'Their market breakdowns are sharp, practical, and easy to act on. I use the weekly research notes before planning every trading week.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face' },
  { name: 'Olivia Harris', role: 'Commodities Trader', stars: 5, text: 'The gold and oil modules were excellent. Trade Viora gave me a structured way to understand risk, entries, and market context.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face' },
];

const articles = [
  { tag: 'Forex', title: 'How Central Bank Decisions Shape Currency Markets in 2025', desc: 'Understanding how interest rate decisions from the Fed, ECB, and BoJ create ripple effects across all major currency pairs.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop', date: 'May 15, 2025' },
  { tag: 'Crypto', title: 'Bitcoin Halving Explained: What It Means for Your Portfolio', desc: 'A deep-dive into Bitcoin halving cycles and how they historically impact price action across the crypto market.', img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop', date: 'May 10, 2025' },
  { tag: 'Stocks', title: 'Value Investing in a High-Inflation Environment', desc: 'Proven strategies for identifying undervalued equities when traditional valuation metrics get distorted by inflation.', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop', date: 'May 5, 2025' },
];

export default function HomePage() {
  const statsRef = useRef([]);
  const serviceRefs = useRef([]);
  const testimonialRefs = useRef([]);
  const articleRefs = useRef([]);
  const aboutRef = useRef(null);
  const whyRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();

    // Stats animate in
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: statsRef.current[0], start: 'top 85%' }
      }
    );

    // About section
    if (aboutRef.current) {
      const els = aboutRef.current.querySelectorAll('.col-text, .col-image');
      gsap.fromTo(els,
        { opacity: 0, x: (i) => i === 0 ? -60 : 60 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: aboutRef.current, start: 'top 80%' }
        }
      );
    }

    // Service cards
    gsap.fromTo(serviceRefs.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: serviceRefs.current[0], start: 'top 85%' }
      }
    );

    // Testimonials
    gsap.fromTo(testimonialRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: testimonialRefs.current[0], start: 'top 85%' }
      }
    );

    // Articles
    gsap.fromTo(articleRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: articleRefs.current[0], start: 'top 85%' }
      }
    );

    // Why section
    if (whyRef.current) {
      const items = whyRef.current.querySelectorAll('.value-card');
      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: whyRef.current, start: 'top 80%' }
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="home-page">
      <Hero />

      {/* ─── STATS ROW ─── */}
      <div style={{ background: '#fff', padding: '60px 40px', display: 'flex', justifyContent: 'center' }}>
        <div className="stats-row" style={{ maxWidth: 1200 }}>
          {stats.map((s, i) => (
            <div className="stat-box" key={i} ref={el => statsRef.current[i] = el}>
              <h3>{s.num}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── ABOUT PREVIEW ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }} ref={aboutRef}>
        <div className="full-section-inner">
          <div className="two-col">
            <div className="col-image">
              <img
                src="https://marketinvestopedia.com/wp-content/uploads/elementor/thumbs/factory-office-meeting-chief-engineer-talking-with-business-partner-conference-room-with-tv-w-scaled-rjwzb7miaoc8rjr518l5wntevrl0tvssl8m4phm1q8.jpg"
                alt="About Trade Viora"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560472355-536de3962603?w=700&h=500&fit=crop'; }}
              />
              <div className="img-overlay">
                <p>🏆 Trusted by 50,000+ traders worldwide</p>
              </div>
            </div>
            <div className="col-text">
              <span className="section-badge">ABOUT TRADE VIORA</span>
              <h2>The Standard in Global Trading Education</h2>
              <p>Trade Viora was born from a singular vision: to democratize access to elite financial market knowledge. We combine decades of institutional expertise with modern, accessible education to empower every trader—from complete beginners to seasoned professionals.</p>
              <p>Our research team monitors 50+ markets daily, delivering precise signals and unbiased analysis that helps our community stay ahead of market movements.</p>
              <ul className="feature-list-v2">
                <li><span className="fcheck">✓</span>Live market sessions with expert analysts</li>
                <li><span className="fcheck">✓</span>Real-time trading signals & alerts</li>
                <li><span className="fcheck">✓</span>Comprehensive risk management frameworks</li>
                <li><span className="fcheck">✓</span>Community of 50,000+ active traders</li>
                <li><span className="fcheck">✓</span>Courses in Forex, Crypto, Stocks & Commodities</li>
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: 20, display: 'inline-block' }}>Learn Our Story →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <div className="full-section" style={{ background: '#fff' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">WHAT WE OFFER</span>
          <h2 className="section-heading">Comprehensive Market <span>Education</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>From forex to crypto, commodities to indices—we cover every major market with precision research, expert analysis and structured learning paths.</p>
          <div className="cards-grid-3">
            {services.map((s, i) => (
              <div
                className="value-card"
                key={i}
                ref={el => serviceRefs.current[i] = el}
                style={{ textAlign: 'left' }}
              >
                <span className="v-icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <Link to="/services" className="read-more">Learn More →</Link>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 50 }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>View All Services</Link>
          </div>
        </div>
      </div>

      {/* ─── WHY CHOOSE US ─── */}
      <div className="full-section" style={{ background: '#0d1f3c' }} ref={whyRef}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">WHY TRADE VIORA</span>
          <h2 className="section-heading" style={{ color: '#fff' }}>What Sets Us <span>Apart</span></h2>
          <p className="section-desc" style={{ margin: '0 auto 0', color: 'rgba(255,255,255,0.7)' }}>We don't just teach trading—we build disciplined, analytical market professionals.</p>
          <div className="cards-grid-4" style={{ marginTop: 60 }}>
            {[
              { icon: '🔬', title: 'Research-Driven', desc: 'Every signal and lesson is backed by rigorous market research, not speculation.' },
              { icon: '🧠', title: 'Expert Mentors', desc: 'Learn from traders with 10-20 years of real institutional market experience.' },
              { icon: '⚡', title: 'Real-Time Insights', desc: 'Get live market updates, alerts and analysis as markets move.' },
              { icon: '🌍', title: 'Global Community', desc: 'Join traders from 120+ countries, sharing ideas in our active community.' },
            ].map((w, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: '35px 25px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{w.icon}</div>
                <h4 style={{ color: '#fff', marginBottom: 10, fontSize: '1.1rem' }}>{w.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── HOW IT WORKS ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">HOW IT WORKS</span>
          <h2 className="section-heading">Your Journey to <span>Market Mastery</span></h2>
          <div className="process-steps">
            {[
              { num: '01', title: 'Register Free', desc: 'Create your account in under 2 minutes and access our free introductory resources.' },
              { num: '02', title: 'Choose Your Path', desc: 'Select from Forex, Crypto, Stocks or Commodities based on your goals.' },
              { num: '03', title: 'Learn & Practice', desc: 'Study at your pace with live sessions, recorded lessons, and paper trading.' },
              { num: '04', title: 'Trade Confidently', desc: 'Enter live markets armed with proven strategies and real-time mentor support.' },
            ].map((p, i) => (
              <div className="process-step" key={i}>
                <div className="step-num">{p.num}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <div className="full-section" style={{ background: '#fff' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">SUCCESS STORIES</span>
          <h2 className="section-heading">What Our <span>Traders Say</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Real results from real traders who trusted Trade Viora to transform their financial future.</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i} ref={el => testimonialRefs.current[i] = el}>
                <div className="stars">{'★'.repeat(t.stars)}</div>
                <span className="quote-icon">"</span>
                <p>{t.text}</p>
                <div className="t-author">
                  <img className="t-avatar" src={t.avatar} alt={t.name} />
                  <div className="t-info">
                    <h5>{t.name}</h5>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── LATEST ARTICLES ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">RESOURCE HUB</span>
          <h2 className="section-heading">Latest Market <span>Insights</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Stay ahead with our expert research, market analysis, and trading strategies.</p>
          <div className="cards-grid-3">
            {articles.map((a, i) => (
              <div className="info-card" key={i} ref={el => articleRefs.current[i] = el}>
                <img className="card-img" src={a.img} alt={a.title} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop'; }} />
                <div className="card-body">
                  <span className="card-tag">{a.tag} · {a.date}</span>
                  <div className="card-title">{a.title}</div>
                  <p className="card-desc">{a.desc}</p>
                  <Link to="/resources" className="card-link">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 50 }}>
            <Link to="/resources" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>View All Articles</Link>
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="cta-banner">
        <h2>Ready to Start Your Trading Journey?</h2>
        <p>Join 50,000+ traders who've transformed their financial future with Trade Viora's expert guidance.</p>
        <Link to="/contact" className="btn-white">Get Started Free</Link>
        <Link to="/services" className="btn-dark">Explore Courses</Link>
      </div>
    </div>
  );
}
