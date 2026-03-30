import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import Desktop from './components/Desktop';
import Window from './components/Window';
import CameraApp from './components/CameraApp';

export default function App() {
  const [openApps, setOpenApps] = useState([]);

  const handleAppClick = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps(prev => [...prev, appId]);
    }
  };

  const closeApp = (appId) => {
    setOpenApps(prev => prev.filter(id => id !== appId));
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      userSelect: 'none',
      /* macOS Ventura / Sonoma style warm dusk gradient */
      background: `
        radial-gradient(ellipse at 20% 50%, #5c3b8a 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, #1a4a8a 0%, transparent 50%),
        radial-gradient(ellipse at 60% 80%, #8a3b5c 0%, transparent 50%),
        linear-gradient(135deg, #1a2a4a 0%, #2d3a6b 25%, #4a2060 50%, #1a3a6e 75%, #0d1b3e 100%)
      `,
    }}>
      {/* Decorative light rays */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '5%', left: '15%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(120,160,255,0.25) 0%, transparent 65%)',
          filter: 'blur(20px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '10%',
          width: '500px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(200,100,180,0.2) 0%, transparent 65%)',
          filter: 'blur(25px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', right: '25%',
          width: '350px', height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(80,130,255,0.18) 0%, transparent 70%)',
          filter: 'blur(15px)',
        }} />
      </div>

      <MenuBar />

      <Desktop>
        {openApps.includes('camera') && (
          <Window
            title="Photo Booth"
            onClose={() => closeApp('camera')}
            defaultPos={{
              x: Math.max(0, window.innerWidth / 2 - 320),
              y: Math.max(30, window.innerHeight / 2 - 260)
            }}
          >
            <CameraApp />
          </Window>
        )}
      </Desktop>

      <Dock onAppClick={handleAppClick} />
    </div>
  );
}
