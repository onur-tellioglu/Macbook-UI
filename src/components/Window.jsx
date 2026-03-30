import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

export default function Window({ title, onClose, children, defaultPos = { x: 100, y: 100 }, defaultSize = { w: 640, h: 480 } }) {
  const nodeRef = useRef(null);
  const [size, setSize] = useState(defaultSize);
  const resizing = useRef(false);
  const startPos = useRef({});

  const onResizeMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    resizing.current = true;
    startPos.current = { x: e.clientX, y: e.clientY, w: size.w, h: size.h };

    const onMove = (ev) => {
      if (!resizing.current) return;
      const dw = ev.clientX - startPos.current.x;
      const dh = ev.clientY - startPos.current.y;
      setSize({
        w: Math.max(400, startPos.current.w + dw),
        h: Math.max(300, startPos.current.h + dh),
      });
    };

    const onUp = () => {
      resizing.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  return (
    <Draggable nodeRef={nodeRef} defaultPosition={defaultPos} bounds="parent" handle=".title-bar">
      <div
        ref={nodeRef}
        style={{
          position: 'absolute',
          zIndex: 100,
          width: size.w,
          height: size.h,
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(30,30,30,0.85)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.12)',
        }}
      >
        {/* macOS Title Bar */}
        <div className="title-bar" style={{
          height: '28px',
          minHeight: '28px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 12px',
          background: 'rgba(50,50,50,0.9)',
          borderBottom: '0.5px solid rgba(255,255,255,0.1)',
          cursor: 'grab',
          position: 'relative',
          userSelect: 'none',
        }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '8px', zIndex: 1 }} className="group">
            <TLButton color="#FF5F57" hoverColor="#E0443E" symbol="×" onClick={onClose} />
            <TLButton color="#FFBD2E" hoverColor="#DEA123" symbol="−" />
            <TLButton color="#28C840" hoverColor="#1AAB29" symbol="+" onClick={() => setSize({ w: window.innerWidth * 0.8, h: window.innerHeight * 0.8 })} />
          </div>
          {/* Title */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '13px', fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '-0.01em',
            pointerEvents: 'none',
          }}>{title}</div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {React.cloneElement(children, { width: size.w, height: size.h - 28 })}
        </div>

        {/* Resize handle */}
        <div
          onMouseDown={onResizeMouseDown}
          style={{
            position: 'absolute',
            bottom: 0, right: 0,
            width: '20px', height: '20px',
            cursor: 'nwse-resize',
            zIndex: 10,
          }}
        >
          <svg viewBox="0 0 16 16" width="16" height="16" style={{ position: 'absolute', bottom: '3px', right: '3px' }}>
            <path d="M14 2 L2 14" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M14 7 L7 14" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M14 12 L12 14" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </Draggable>
  );
}

function TLButton({ color, hoverColor, symbol, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '12px', height: '12px',
        borderRadius: '50%',
        background: hov ? hoverColor : color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'default',
        fontSize: '9px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.5)',
        lineHeight: 1,
        transition: 'background 0.1s',
      }}
    >
      {hov ? symbol : ''}
    </div>
  );
}
