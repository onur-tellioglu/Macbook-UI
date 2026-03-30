import React from 'react';

// macOS Big Sur style icon: emoji inside a gradient rounded-rect
function MacIcon({ emoji, gradient, size = '100%' }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`g-${emoji}`} x1="0" y1="0" x2="0.5" y2="1">
          {gradient.map((c, i) => (
            <stop key={i} offset={`${(i / (gradient.length - 1)) * 100}%`} stopColor={c} />
          ))}
        </linearGradient>
        <clipPath id={`clip-${emoji}`}>
          <rect x="0" y="0" width="100" height="100" rx="22" ry="22"/>
        </clipPath>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="22" fill={`url(#g-${emoji})`}/>
      {/* Subtle top highlight */}
      <ellipse cx="50" cy="12" rx="35" ry="15" fill="rgba(255,255,255,0.18)" clipPath={`url(#clip-${emoji})`}/>
      <text x="50" y="65" textAnchor="middle" fontSize="52" fontFamily="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">{emoji}</text>
    </svg>
  );
}

export const Icons = {
  Safari: () => <MacIcon emoji="🧭" gradient={['#5EC8FA','#1A7FFF','#0055DD']} />,
  Messages: () => <MacIcon emoji="💬" gradient={['#5CF058','#28D928','#18A918']} />,
  PhotoBooth: () => <MacIcon emoji="📷" gradient={['#555','#2A2A2A','#111']} />,

  // Kept for potential future use
  Finder: () => <MacIcon emoji="🗂️" gradient={['#6FC3F7','#2A7FD4','#1A5BAA']} />,
  Launchpad: () => <MacIcon emoji="🚀" gradient={['#3A3A3A','#1A1A1A','#0A0A0A']} />,
  Mail: () => <MacIcon emoji="📬" gradient={['#5AC8FA','#0A84FF','#0055CC']} />,
  Maps: () => <MacIcon emoji="🗺️" gradient={['#34C759','#20A744','#15823A']} />,
  Photos: () => <MacIcon emoji="🌸" gradient={['#fff','#f5f5f5','#eee']} />,
  AppStore: () => <MacIcon emoji="🅰️" gradient={['#1E9FFF','#0057FF','#003DBB']} />,
  SystemSettings: () => <MacIcon emoji="⚙️" gradient={['#8E8E93','#636366','#3A3A3C']} />,
};
