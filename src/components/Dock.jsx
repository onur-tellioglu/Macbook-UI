import React from 'react';

// Real macOS Big Sur/Monterey icons from jim-nielsen's CDN
const DOCK_APPS = [
  { id: 'finder',    name: 'Finder',          icon: 'https://cdn.jim-nielsen.com/macos/512/finder-2021-09-08.png' },
  { id: 'launchpad', name: 'Launchpad',        icon: 'https://cdn.jim-nielsen.com/macos/512/launchpad-2021-05-31.png' },
  { id: 'safari',    name: 'Safari',           icon: 'https://cdn.jim-nielsen.com/macos/512/safari-2021-06-14.png' },
  { id: 'messages',  name: 'Messages',         icon: 'https://cdn.jim-nielsen.com/macos/512/messages-2021-05-31.png' },
  { id: 'mail',      name: 'Mail',             icon: 'https://cdn.jim-nielsen.com/macos/512/mail-2021-06-14.png' },
  { id: 'maps',      name: 'Maps',             icon: 'https://cdn.jim-nielsen.com/macos/512/maps-2021-05-31.png' },
  { id: 'photos',    name: 'Photos',           icon: 'https://cdn.jim-nielsen.com/macos/512/photos-2021-06-14.png' },
  { id: 'camera',    name: 'Photo Booth',      icon: 'https://cdn.jim-nielsen.com/macos/512/photo-booth-2021-05-31.png' },
  { id: 'appstore',  name: 'App Store',        icon: 'https://cdn.jim-nielsen.com/macos/512/app-store-2021-05-31.png' },
  { id: 'settings',  name: 'System Settings',  icon: 'https://cdn.jim-nielsen.com/macos/512/system-preferences-2021-05-31.png' },
];

export default function Dock({ onAppClick }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '6px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '6px',
        padding: '8px 12px',
        borderRadius: '18px',
        background: 'rgba(255,255,255,0.22)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.45)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
      }}>
        {DOCK_APPS.map((app, i) => (
          <DockIcon key={app.id} app={app} onAppClick={onAppClick} />
        ))}
      </div>
    </div>
  );
}

function DockIcon({ app, onAppClick }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: '110%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(30,30,30,0.85)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 500,
          padding: '4px 10px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          border: '1px solid rgba(255,255,255,0.15)',
          zIndex: 100,
        }}>{app.name}</div>
      )}

      <img
        src={app.icon}
        alt={app.name}
        onClick={() => onAppClick(app.id)}
        style={{
          width: hovered ? '64px' : '54px',
          height: hovered ? '64px' : '54px',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'all 0.15s ease',
          cursor: 'pointer',
          borderRadius: '14px',
          imageRendering: 'crisp-edges',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
        }}
      />

      {/* Running dot */}
      {app.id === 'finder' && (
        <div style={{
          position: 'absolute',
          bottom: '-6px',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          boxShadow: '0 0 4px rgba(255,255,255,0.6)',
        }} />
      )}
    </div>
  );
}
