import React, { useState, useEffect } from 'react';

// Apple logo SVG
const AppleLogo = () => (
  <svg width="13" height="16" viewBox="0 0 814 1000" fill="white" style={{ marginTop: '-1px' }}>
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-150.3-110.9C58.3 853.2 0 769.5 0 688.1c0-123.8 72.1-188.3 138.6-237.9C212.9 395.6 317.3 363 417.3 363c94 0 171.5 36.4 216.7 36.4 42.4 0 127.6-41.6 212.7-41.6 34.4 0 100.9 3.2 153.4 65.3zm-158.7-226.3C671 26.4 701.3 0 750.7 0c2.6 0 5.2 0 7.8.3-1.3 40.8-16.8 78.9-36.8 105.9-23.4 30.1-60.9 57.4-104.4 57.4-2.6 0-5.2-.3-7.8-.6.7-37.5 16.1-74.7 30.9-97z"/>
  </svg>
);

export default function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = (d) => d.toLocaleString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  });

  const items = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'];

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0,
      height: '24px',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px',
      background: 'rgba(0,0,0,0.18)',
      backdropFilter: 'blur(40px) saturate(180%)',
      WebkitBackdropFilter: 'blur(40px) saturate(180%)',
      borderBottom: '0.5px solid rgba(255,255,255,0.18)',
      color: 'white',
      fontSize: '13px',
      fontWeight: 500,
      userSelect: 'none',
      letterSpacing: '-0.01em',
    }}>
      {/* Left: Apple + app menus */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <MenuBarItem>
          <AppleLogo />
        </MenuBarItem>
        {items.map((item, i) => (
          <MenuBarItem key={item} bold={i === 0}>{item}</MenuBarItem>
        ))}
      </div>

      {/* Right: System tray */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Wifi */}
        <svg width="15" height="11" viewBox="0 0 24 18" fill="white" opacity="0.9">
          <path d="M12 4C8.5 4 5.4 5.4 3.1 7.7L0 4.6C3.1 1.7 7.3 0 12 0s8.9 1.7 12 4.6L20.9 7.7C18.6 5.4 15.5 4 12 4z"/>
          <path d="M12 8c-2.5 0-4.7 1-6.3 2.6L3 7.9C5.4 5.5 8.6 4 12 4s6.6 1.5 9 3.9l-2.7 2.7C16.7 9 14.5 8 12 8z"/>
          <path d="M12 12c-1.5 0-2.8.6-3.8 1.5L5.6 10.9C7.3 9.1 9.5 8 12 8s4.7 1.1 6.4 2.9l-2.6 2.6C14.8 12.6 13.5 12 12 12z"/>
          <circle cx="12" cy="16" r="2"/>
        </svg>
        
        {/* Battery */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.9"/>
            <rect x="2" y="2" width="17" height="8" rx="1.5" fill="white" fillOpacity="0.9"/>
            <path d="M23 4v4a2 2 0 0 0 0-4z" fill="white" fillOpacity="0.9"/>
          </svg>
          <span style={{ fontSize: '12px', opacity: 0.9 }}>100%</span>
        </div>

        {/* Clock */}
        <span style={{ opacity: 0.95, letterSpacing: '0' }}>{fmt(time)}</span>
      </div>
    </div>
  );
}

function MenuBarItem({ children, bold }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: 'default',
        padding: '1px 7px',
        borderRadius: '4px',
        background: hover ? 'rgba(255,255,255,0.2)' : 'transparent',
        transition: 'background 0.1s',
        fontWeight: bold ? 600 : 500,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </span>
  );
}
