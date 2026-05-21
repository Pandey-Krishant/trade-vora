import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../components/Pages.css';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: 'How do I get started with Trade Viora?', a: 'Simply fill out the contact form above or sign up for our free Starter plan. A member of our team will reach out within 24 hours to help you choose the right learning path for your goals.' },
  { q: 'Do I need prior trading experience to join?', a: 'Absolutely not! Our curriculum is designed for complete beginners through advanced traders. We assess your level and tailor your learning path accordingly.' },
  { q: 'What markets do you cover?', a: 'We provide comprehensive education and research across Forex, Cryptocurrency, Commodities (gold, oil, silver), Stock Markets, and Global Indices (S&P 500, Nasdaq, FTSE, Nikkei, DAX).' },
  { q: 'Are the live trading sessions recorded?', a: 'Yes, all live sessions are recorded and available in your member dashboard within 2 hours of the session ending. You never miss a lesson.' },
  { q: 'How are your trading signals delivered?', a: 'Signals are delivered via our private Discord community, email, and our mobile app in real-time. Professional plan members receive signals for all 5 markets.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime with no penalty. We also offer a 7-day money-back guarantee.' },
];

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const faqRefs = useRef([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('h1, p, .breadcrumb'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
      );
    }

    if (formRef.current) {
      gsap.fromTo(formRef.current.querySelectorAll('.contact-info-box, .contact-form-box'),
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' }
        }
      );
    }

    gsap.fromTo(faqRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: faqRefs.current[0], start: 'top 85%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ─── HERO ─── */}
      <div className="page-hero" ref={heroRef}>
        <div className="page-hero-inner">
          <p className="breadcrumb">Home / <span>Contact Us</span></p>
          <h1>Get In Touch With Us</h1>
          <p>Have questions about our courses, trading signals, or membership plans? Our team is here to help you take the next step in your trading journey.</p>
        </div>
      </div>

      {/* ─── CONTACT SECTION ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }}>
        <div className="full-section-inner">
          <div className="contact-grid" ref={formRef}>
            {/* Info Box */}
            <div className="contact-info-box">
              <h3>Contact Information</h3>
              <p>Reach out to us through any of the channels below. We typically respond within 24 hours during business days.</p>

              <div className="contact-detail">
                <span className="cd-icon">📧</span>
                <div>
                  <h5>Email Us</h5>
                  <p>info@tradeviora.com<br />support@tradeviora.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="cd-icon">📞</span>
                <div>
                  <h5>Call Us</h5>
                  <p>+1 (888) 420-7654<br />Mon–Fri, 9am–6pm EST</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="cd-icon">📍</span>
                <div>
                  <h5>Head Office</h5>
                  <p>1275 Financial District Blvd<br />New York, NY 10005, USA</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="cd-icon">💬</span>
                <div>
                  <h5>Live Chat</h5>
                  <p>Available 24/7 for Professional<br />and Elite members</p>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: 40 }}>
                <h5 style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 15 }}>Follow Us</h5>
                <div style={{ display: 'flex', gap: 12 }}>
                  {['📘 Facebook', '🐦 Twitter', '📷 Instagram', '▶ YouTube'].map((s, i) => (
                    <a key={i} href="#" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '8px 12px', borderRadius: 8, fontSize: '0.8rem', textDecoration: 'none', transition: 'all 0.3s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(204,164,80,0.3)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >{s}</a>
                  ))}
                </div>
              </div>

              {/* Map Image */}
              <div style={{ marginTop: 30, borderRadius: 14, overflow: 'hidden', height: 150 }}>
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=200&fit=crop"
                  alt="Location"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
              </div>
            </div>

            {/* Form Box */}
            <div className="contact-form-box">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ fontSize: '4rem', marginBottom: 20 }}>✅</div>
                  <h3 style={{ marginBottom: 15 }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>Thank you for reaching out. One of our team members will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="form-submit" style={{ marginTop: 30, width: 'auto', padding: '14px 30px' }}>Send Another Message</button>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label>First Name *</label>
                        <input type="text" placeholder="John" required />
                      </div>
                      <div className="form-group">
                        <label>Last Name *</label>
                        <input type="text" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+1 234 567 8900" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>I'm interested in *</label>
                      <select required>
                        <option value="">Select a service...</option>
                        <option>Forex Trading Education</option>
                        <option>Cryptocurrency Markets</option>
                        <option>Commodities Trading</option>
                        <option>Stock Market & Equities</option>
                        <option>Global Market Indices</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Your Experience Level</label>
                      <select>
                        <option value="">Select level...</option>
                        <option>Complete Beginner</option>
                        <option>Some Experience (1-2 years)</option>
                        <option>Intermediate (2-5 years)</option>
                        <option>Advanced (5+ years)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Your Message *</label>
                      <textarea placeholder="Tell us about your trading goals and how we can help..." required />
                    </div>
                    <button type="submit" className="form-submit">Send Message →</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── WHY CONTACT US ─── */}
      <div className="full-section" style={{ background: '#fff' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">WHAT TO EXPECT</span>
          <h2 className="section-heading">When You Reach <span>Out to Us</span></h2>
          <div className="cards-grid-3" style={{ marginTop: 50 }}>
            {[
              { icon: '⚡', title: '24hr Response Time', desc: 'Our team responds to every inquiry within 24 hours—usually much faster during business hours.' },
              { icon: '🎯', title: 'Personalized Guidance', desc: 'We don\'t use generic templates. Every response is personalized to your specific trading goals.' },
              { icon: '🤝', title: 'No Hard Selling', desc: 'We guide you to the right plan for your needs, not the most expensive one. Your success is our success.' },
            ].map((c, i) => (
              <div className="value-card" key={i}>
                <span className="v-icon">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="full-section" style={{ background: '#faf5eb' }}>
        <div className="full-section-inner" style={{ textAlign: 'center' }}>
          <span className="section-badge">FAQ</span>
          <h2 className="section-heading">Frequently Asked <span>Questions</span></h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Everything you need to know before getting started with Trade Viora.</p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i} ref={el => faqRefs.current[i] = el}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <div className="faq-ans">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="cta-banner">
        <h2>Ready to Start Trading Smarter?</h2>
        <p>Don't wait another day to begin your trading education. Our experts are standing by to help you get started.</p>
        <a href="#" className="btn-white">Schedule a Free Call</a>
      </div>
    </div>
  );
}
