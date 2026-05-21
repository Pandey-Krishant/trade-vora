import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer style={{ background: '#1c3d7a', color: '#fff', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{color: '#cca450', letterSpacing: '2px', marginBottom: '20px'}}>TRADE VIORA</h2>
        <p style={{color: '#a0aec0', maxWidth: '600px', margin: '0 auto 30px'}}>
          Empowering the next generation of traders with elite intelligence and deep market analysis.
        </p>
        <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.9rem', color: '#718096'}}>
          © 2026 Trade Viora (Market Investopedia Replica). All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
