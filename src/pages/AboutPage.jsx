import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../components/Pages.css';

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: 'Carlos Smith', role: 'Founder & Chief Analyst', bio: '20+ years in institutional forex trading. Former senior strategist at a top-tier investment bank.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=350&fit=crop&crop=face' },
  { name: 'Sarah Mitchell', role: 'Head of Crypto Research', bio: 'Early Bitcoin adopter with 12 years in blockchain and DeFi investment. MIT-educated quantitative analyst.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=350&fit=crop&crop=face' },
  { name: 'David Okafor', role: 'Senior Commodities Strategist', bio: 'Gold and energy markets specialist with over 15 years of proprietary trading experience.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=350&fit=crop&crop=face' },
  { name: 'Priya Nair', role: 'Equities & Indices Analyst', role2: 'CFA Charterholder', bio: 'Specializes in emerging market equities and global indices. 10+ years with hedge funds.', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b37f?w=400&h=350&fit=crop&crop=face' },
];

const values = [
  { icon: '🎯', title: 'Precision Over Noise', desc: 'We cut through market noise to deliver only the most precise, actionable intelligence to our community.' },
  { icon: '🔒', title: 'Trust & Transparency', desc: 'We are fully transparent about our methodologies, track records, and risk parameters.' },
  { icon: '📚', title: 'Education First', desc: "We believe in empowering traders through knowledge, not dependency on us for every decision." },
  { icon: '🌐', title: 'Global Perspective', desc: 'Markets are interconnected. Our analysis spans 50+ instruments across 20+ global exchanges.' },
  { icon: '⚡', title: 'Constant Innovation', desc: 'We invest heavily in research technology and data systems to stay ahead of market evolution.' },
  { icon: '🤝', title: 'Community Strength', desc: 'Our global trader community is our greatest asset. We grow together through shared learning.' },
];

const timeline = [
  { year: '2007', title: 'Foundation', desc: 'Market Investopedia (Trade Viora) was founded in response to the 2008 financial crisis—ordinary people needed reliable financial education.' },
  { year: '2011', title: 'Forex Academy Launch', desc: 'Launched our flagship Forex Trading Academy, which quickly grew to 5,000 enrolled students in its first year.' },
  { year: '2015', title: 'Global Expansion', desc: 'Expanded operations to 40+ countries, with regional offices and language-localized content across Asia, Europe, and the Americas.' },
  { year: '2019', title: 'Crypto Division', desc: 'Established our dedicated Cryptocurrency Research & Education division, becoming an early leader in institutional crypto education.' },
  { year: '2023', title: '50,000 Milestone', desc: 'Celebrated our 50,000th student milestone, cementing our position as one of the world\'s leading trading education platforms.' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const statsRef = useRef([]);
  const teamRefs = useRef([]);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    // Hero entrance
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('h1, p, .breadcrumb'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
      );
    }

    // Story two-col
    if (storyRef.current) {
      gsap.fromTo(storyRef.current.querySelectorAll('.col-image, .col-text'),
        { opacity: 0, x: (i) => i === 0 ? -80 : 80 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
        }
      );
    }

    // Stats
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: statsRef.current[0], start: 'top 85%' }
      }
    );

    // Team cards
    gsap.fromTo(teamRefs.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: teamRefs.current[0], start: 'top 85%' }
      }
    );

    // Values
    if (valuesRef.current) {
      gsap.fromTo(valuesRef.current.querySelectorAll('.value-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' }
        }
      );
    }

    // Timeline
    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current.querySelectorAll('.timeline-item'),
        { opacity: 0, x: (i) => i % 2 === 0 ? -50 : 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
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
          <p className="breadcrumb">Home / <span>About Us</span></p>
          <h1>Our Story & Mission</h1>
          <p>Built on a foundation of trust, research and passion for financial education—Trade Viora exists to make elite market intelligence accessible to everyone, everywhere.</p>
        </div>
      </div>

      {/* ─── STORY ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }} ref={storyRef}>
        <div className="full-section-inner">
          <div className="two-col">
            <div className="col-image">
              <img
                src="https://marketinvestopedia.com/wp-content/uploads/elementor/thumbs/factory-office-meeting-chief-engineer-talking-with-business-partner-conference-room-with-tv-w-scaled-rjwzb7miaoc8rjr518l5wntevrl0tvssl8m4phm1q8.jpg"
                alt="Our Story"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560472355-536de3962603?w=700&h=500&fit=crop'; }}
              />
              <div className="img-overlay"><p>📍 Operating from 40+ countries worldwide</p></div>
            </div>
            <div className="col-text">
              <span className="section-badge">OUR STORY</span>
              <h2>From a Small Desk to a Global Trading Academy</h2>
              <p>In 2007, our founder Carlos Smith watched ordinary people lose their savings in the financial crisis—not because they were reckless, but because they lacked access to the same knowledge that institutional traders took for granted.</p>
              <p>That moment sparked a mission. Trade Viora was built to bridge that gap—to give every aspiring trader access to the same caliber of research, strategy, and market intelligence that was previously only available to professionals inside investment banks and hedge funds.</p>
              <p>Today, we serve over 50,000 students across 120+ countries, covering Forex, Crypto, Stocks, Commodities, and Global Indices—all delivered by real practitioners with decades of live trading experience.</p>
              <ul className="feature-list-v2">
                <li><span className="fcheck">✓</span>Founded in 2007, operating for 17+ years</li>
                <li><span className="fcheck">✓</span>50,000+ trained students globally</li>
                <li><span className="fcheck">✓</span>120+ countries reached</li>
                <li><span className="fcheck">✓</span>Research team monitoring 50+ markets daily</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── STATS ─── */}
      <div style={{ background: '#fff', padding: '80px 40px', display: 'flex', justifyContent: 'center' }}>
        <div className="stats-row" style={{ maxWidth: 1200 }}>
          {[
            { num: '17+', label: 'Years of Excellence' },
            { num: '50K+', label: 'Students Trained' },
            { num: '120+', label: 'Countries Reached' },
            { num: '98%', label: 'Student Satisfaction' },
          ].map((s, i) => (
            <div className="stat-box" key={i} ref={el => statsRef.current[i] = el}>
              <h3>{s.num}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MISSION & VISION ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }}>
        <div className="full-section-inner">
          <div className="two-col reverse">
            <div className="col-text">
              <span className="section-badge">MISSION & VISION</span>
              <h2>Empowering Traders with Institutional-Grade Intelligence</h2>
              <p>Our mission is straightforward: to equip every trader—regardless of background or capital size—with the analytical tools, market knowledge, and strategic frameworks used by the world's best professional traders.</p>
              <p>We believe financial markets should not be the exclusive playground of the ultra-wealthy. Through disciplined education, transparent research, and a supportive global community, we are leveling the playing field.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 30 }}>
                {[
                  { icon: '🎯', label: 'Our Mission', desc: 'Democratize elite trading education for everyone globally.' },
                  { icon: '🌟', label: 'Our Vision', desc: 'A world where every trader trades with confidence and clarity.' },
                ].map((m, i) => (
                  <div key={i} style={{ background: '#fff', padding: '25px', borderRadius: 14, boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 10 }}>{m.icon}</div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: 8 }}>{m.label}</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop"
                alt="Our Mission"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── TEAM ─── */}
      <div className="full-section" style={{ background: '#fff' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">MEET THE TEAM</span>
          <h2 className="section-heading">World-Class <span>Experts</span> Behind Trade Viora</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Our analysts and educators bring decades of real-world trading experience from the world's leading financial institutions.</p>
          <div className="cards-grid-4" style={{ marginTop: 60 }}>
            {team.map((m, i) => (
              <div className="team-card" key={i} ref={el => teamRefs.current[i] = el}>
                <img className="team-img" src={m.img} alt={m.name} />
                <div className="team-body">
                  <div className="team-name">{m.name}</div>
                  <div className="team-role">{m.role}</div>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TIMELINE ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }} ref={timelineRef}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">OUR JOURNEY</span>
          <h2 className="section-heading">Milestones That <span>Define Us</span></h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className={i % 2 === 0 ? 'tl-content' : 'tl-year'} style={{ textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                  {i % 2 === 0 ? <><h4>{item.title}</h4><p>{item.desc}</p></> : <span>{item.year}</span>}
                </div>
                <div className={i % 2 === 0 ? 'tl-year' : 'tl-content'} style={{ textAlign: i % 2 === 0 ? 'left' : 'right' }}>
                  {i % 2 === 0 ? <span>{item.year}</span> : <><h4>{item.title}</h4><p>{item.desc}</p></>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── VALUES ─── */}
      <div className="full-section" style={{ background: '#fff' }} ref={valuesRef}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">OUR VALUES</span>
          <h2 className="section-heading">The Principles We <span>Trade By</span></h2>
          <div className="cards-grid-3">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="v-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="cta-banner">
        <h2>Join 50,000+ Traders Learning with Us</h2>
        <p>Start your trading education journey today and gain the skills to navigate any market with confidence.</p>
        <Link to="/contact" className="btn-white">Get Started Today</Link>
        <Link to="/services" className="btn-dark">Explore Services</Link>
      </div>
    </div>
  );
}
