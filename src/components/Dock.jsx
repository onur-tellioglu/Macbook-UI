import React from 'react';
import { Icons } from './AppIcons';

const DOCK_APPS = [
  { id: 'safari',   name: 'Safari',      Icon: Icons.Safari },
  { id: 'messages', name: 'Messages',    Icon: Icons.Messages },
  { id: 'camera',   name: 'Photo Booth', Icon: Icons.PhotoBooth },
];

export default function Dock({ onAppClick, openApps = [] }) {
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
        background: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(40px) saturate(200%)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%)',
        border: '1px solid rgba(255,255,255,0.4)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.45)',
      }}>
        {DOCK_APPS.map(app => (
          <DockIcon key={app.id} app={app} isOpen={openApps.includes(app.id)} onAppClick={onAppClick} />
        ))}
      </div>
    </div>
  );
}

function DockIcon({ app, isOpen, onAppClick }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 10px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(30,30,30,0.82)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 500,
          padding: '4px 10px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          border: '0.5px solid rgba(255,255,255,0.2)',
        }}>{app.name}</div>
      )}

      <div
        onClick={() => onAppClick(app.id)}
        style={{
          width: hovered ? '62px' : '54px',
          height: hovered ? '62px' : '54px',
          transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
          cursor: 'pointer',
          filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.4))',
        }}
      >
        <app.Icon />
      </div>

      {/* Running dot */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '-6px',
          width: '5px', height: '5px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          boxShadow: '0 0 4px rgba(255,255,255,0.6)',
        }} />
      )}
      {/* Finder always running */}
      {app.id === 'finder' && !isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '-6px',
          width: '5px', height: '5px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.7)',
        }} />
      )}
    </div>
  );
}
