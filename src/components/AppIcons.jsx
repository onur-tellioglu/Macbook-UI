import React from 'react';

// macOS Big Sur style SVG icons
export const Icons = {
  Finder: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="finderBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6FC3F7"/>
          <stop offset="100%" stopColor="#2A7FD4"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#finderBg)"/>
      {/* Face left half - blue */}
      <rect x="6" y="6" width="88" height="88" rx="18" fill="url(#finderBg)"/>
      {/* Split */}
      <rect x="50" y="6" width="44" height="88" rx="0" fill="#2A7FD4"/>
      <rect x="50" y="6" width="44" height="88" rx="18" fill="#2A7FD4"/>
      {/* White oval base face */}
      <ellipse cx="50" cy="58" rx="36" ry="36" fill="white" opacity="0.95"/>
      {/* Eyes */}
      <ellipse cx="38" cy="46" rx="6" ry="7" fill="#2A7FD4"/>
      <ellipse cx="62" cy="46" rx="6" ry="7" fill="white"/>
      <ellipse cx="38" cy="46" rx="3" ry="4" fill="white"/>
      <ellipse cx="62" cy="46" rx="3" ry="4" fill="#1A1A1A"/>
      {/* Smile */}
      <path d="M36 63 Q50 76 64 63" stroke="#1A1A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Nose bump */}
      <ellipse cx="50" cy="57" rx="3" ry="2" fill="#ddd"/>
    </svg>
  ),

  Launchpad: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="lpBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D3D3D"/>
          <stop offset="100%" stopColor="#1A1A1A"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#lpBg)"/>
      {/* Rocket */}
      <path d="M50 20 C50 20 65 30 65 50 L65 65 L50 72 L35 65 L35 50 C35 30 50 20 50 20Z" fill="#C8C8C8"/>
      <path d="M50 20 C50 20 58 28 58 45 L58 60 L50 65 L42 60 L42 45 C42 28 50 20 50 20Z" fill="#E8E8E8"/>
      {/* Window */}
      <circle cx="50" cy="44" r="7" fill="#5BC8F5" opacity="0.9"/>
      <circle cx="50" cy="44" r="5" fill="#3AA8D8"/>
      {/* Fins */}
      <path d="M35 58 L25 70 L35 65Z" fill="#A0A0A0"/>
      <path d="M65 58 L75 70 L65 65Z" fill="#A0A0A0"/>
      {/* Flame */}
      <ellipse cx="50" cy="75" rx="6" ry="8" fill="#FF6B00" opacity="0.9"/>
      <ellipse cx="50" cy="75" rx="4" ry="6" fill="#FFB300"/>
    </svg>
  ),

  Safari: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="safBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5EC8FA"/>
          <stop offset="100%" stopColor="#0A84FF"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#safBg)"/>
      <circle cx="50" cy="50" r="38" fill="white" opacity="0.12"/>
      <circle cx="50" cy="50" r="36" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1.5"/>
      {/* Compass needle */}
      <polygon points="50,18 55,50 50,46 45,50" fill="#FF3B30"/>
      <polygon points="50,82 45,50 50,54 55,50" fill="white" opacity="0.85"/>
      {/* Cardinal marks */}
      {['N','S','E','W'].map((c,i) => {
        const a = i * 90 * Math.PI/180;
        return <text key={c} x={50 + 27*Math.sin(a)-4} y={50 - 27*Math.cos(a)+4} fontSize="9" fill="white" fontWeight="bold" fontFamily="sans-serif">{c}</text>
      })}
      <circle cx="50" cy="50" r="3" fill="white"/>
    </svg>
  ),

  Messages: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="msgBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5CF058"/>
          <stop offset="100%" stopColor="#25D025"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#msgBg)"/>
      <path d="M18 28 Q18 20 26 20 L74 20 Q82 20 82 28 L82 60 Q82 68 74 68 L40 68 L26 82 L26 68 Q18 68 18 60 Z" fill="white"/>
      <circle cx="35" cy="44" r="5" fill="#25D025"/>
      <circle cx="50" cy="44" r="5" fill="#25D025"/>
      <circle cx="65" cy="44" r="5" fill="#25D025"/>
    </svg>
  ),

  Mail: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="mailBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5AC8FA"/>
          <stop offset="100%" stopColor="#0080FF"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#mailBg)"/>
      <rect x="14" y="32" width="72" height="50" rx="6" fill="white"/>
      <path d="M14 38 L50 60 L86 38" stroke="#0080FF" strokeWidth="3" fill="none"/>
    </svg>
  ),

  Maps: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34C759"/>
          <stop offset="100%" stopColor="#30B94B"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#mapBg)"/>
      {/* Map background */}
      <rect x="10" y="10" width="80" height="80" rx="12" fill="#D4EDDA"/>
      <rect x="10" y="10" width="80" height="42" rx="12" fill="#AAD4F5"/>
      <rect x="10" y="40" width="80" height="12" fill="#AAD4F5"/>
      {/* Roads */}
      <path d="M30 55 L70 55" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <path d="M50 35 L50 85" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      {/* Pin */}
      <circle cx="50" cy="42" r="10" fill="#FF3B30"/>
      <circle cx="50" cy="40" r="6" fill="white" opacity="0.4"/>
      <circle cx="47" cy="37" r="2" fill="white" opacity="0.7"/>
      <path d="M50 52 L50 60" stroke="#FF3B30" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),

  Photos: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="phoBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff"/>
          <stop offset="100%" stopColor="#f5f5f5"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="white"/>
      {/* Flower petals */}
      {[0,45,90,135,180,225,270,315].map((deg,i) => {
        const r = deg * Math.PI / 180;
        const colors = ['#FF3B30','#FF9500','#FFCC00','#34C759','#5AC8FA','#007AFF','#5856D6','#FF2D55'];
        return <ellipse key={i} cx={50+22*Math.sin(r)} cy={50-22*Math.cos(r)} rx="12" ry="18"
          fill={colors[i]} transform={`rotate(${deg}, ${50+22*Math.sin(r)}, ${50-22*Math.cos(r)})`} opacity="0.9"/>
      })}
      <circle cx="50" cy="50" r="14" fill="white"/>
    </svg>
  ),

  PhotoBooth: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="pbBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#555"/>
          <stop offset="100%" stopColor="#222"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#pbBg)"/>
      {/* Red curtains */}
      <path d="M8 10 Q25 30 15 55 Q22 40 28 55 Q18 80 10 90 L10 10Z" fill="#CC2211"/>
      <path d="M92 10 Q75 30 85 55 Q78 40 72 55 Q82 80 90 90 L90 10Z" fill="#CC2211"/>
      {/* Stage floor */}
      <ellipse cx="50" cy="80" rx="35" ry="8" fill="#8B6914" opacity="0.5"/>
      {/* Camera on stand */}
      <rect x="42" y="45" width="16" height="12" rx="3" fill="#DDD"/>
      <circle cx="50" cy="51" r="4" fill="#444"/>
      <circle cx="50" cy="51" r="2.5" fill="#111"/>
      <rect x="47" y="57" width="6" height="16" fill="#BBB"/>
      <rect x="40" y="71" width="20" height="3" rx="1" fill="#999"/>
    </svg>
  ),

  AppStore: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="asBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E9FFF"/>
          <stop offset="100%" stopColor="#0057FF"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#asBg)"/>
      {/* A shape with stick */}
      <path d="M50 18 L30 68 L40 68 L50 44 L60 68 L70 68 Z" fill="white"/>
      <path d="M36 54 L64 54" stroke="white" strokeWidth="7" strokeLinecap="round"/>
      {/* Download arrow */}
      <path d="M50 72 L50 86" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <path d="M44 80 L50 87 L56 80" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  SystemSettings: () => (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <linearGradient id="ssBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8E8E93"/>
          <stop offset="100%" stopColor="#636366"/>
        </linearGradient>
        <linearGradient id="ssGear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D1D1D6"/>
          <stop offset="100%" stopColor="#AEAEB2"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#ssBg)"/>
      {/* Gear */}
      {Array.from({length:8},(_,i)=>{
        const a = i * 45 * Math.PI/180;
        return <rect key={i} x={48} y={14} width={4} height={12} rx={2} fill="url(#ssGear)"
          transform={`rotate(${i*45} 50 50)`}/>
      })}
      <circle cx="50" cy="50" r="24" fill="url(#ssGear)"/>
      <circle cx="50" cy="50" r="14" fill="url(#ssBg)"/>
    </svg>
  ),
};
