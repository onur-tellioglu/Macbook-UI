import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import Desktop from './components/Desktop';
import Window from './components/Window';
import CameraApp from './components/CameraApp';
import BatteryWidget from './components/BatteryWidget';
import CalendarWidget from './components/CalendarWidget';

export default function App() {
  const [openApps, setOpenApps] = useState([]);

  const handleAppClick = (appId) => {
    if (!openApps.includes(appId)) setOpenApps(prev => [...prev, appId]);
  };
  const closeApp = (appId) => setOpenApps(prev => prev.filter(id => id !== appId));

  return (
    <div style={{
      position: 'fixed', inset: 0,
      width: '100vw', height: '100vh',
      overflow: 'hidden', userSelect: 'none',
      // macOS Sequoia / Sonoma – purple-blue flow wallpaper
      background: 'radial-gradient(ellipse at 35% 45%, #3a2b9e 0%, #1c1c6b 55%, #0e0e3e 100%)',
    }}>
      {/* macOS Sequoia–style blue-purple wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <filter id="gblur"><feGaussianBlur stdDeviation="70"/></filter>
          <filter id="gblur2"><feGaussianBlur stdDeviation="90"/></filter>
        </defs>
        <ellipse cx="480" cy="340" rx="580" ry="380" fill="#5a3fd8" opacity="0.55" filter="url(#gblur)"/>
        <ellipse cx="950" cy="200" rx="460" ry="320" fill="#7b5de0" opacity="0.4"  filter="url(#gblur)"/>
        <ellipse cx="180" cy="620" rx="380" ry="280" fill="#2243c0" opacity="0.45" filter="url(#gblur2)"/>
        <ellipse cx="1220" cy="520" rx="340" ry="240" fill="#4a2db8" opacity="0.3" filter="url(#gblur2)"/>
        {/* caustic white line */}
        <path d="M80 570 C340 440, 610 600, 870 455 S1270 340, 1520 530"
          stroke="rgba(255,255,255,0.52)" strokeWidth="1.5" fill="none"/>
        <path d="M-80 540 C220 390, 520 570, 820 425 S1210 305, 1560 490"
          stroke="rgba(255,255,255,0.08)" strokeWidth="50" fill="none" filter="url(#gblur)"/>
      </svg>

      <MenuBar />
      <BatteryWidget />
      <CalendarWidget />

      <Desktop>
        {openApps.includes('camera') && (
          <Window
            title="Photo Booth"
            onClose={() => closeApp('camera')}
            defaultPos={{ x: Math.max(0, window.innerWidth/2 - 320), y: Math.max(30, window.innerHeight/2 - 260) }}
            defaultSize={{ w: 680, h: 520 }}
          >
            <CameraApp />
          </Window>
        )}
      </Desktop>

      <Dock onAppClick={handleAppClick} openApps={openApps}/>
    </div>
  );
}
