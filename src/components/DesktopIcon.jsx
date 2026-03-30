import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function DesktopIcon({ id, name, icon: Icon, color, defaultPos, onDoubleClick }) {
  const nodeRef = useRef(null);
  
  return (
    <Draggable nodeRef={nodeRef} defaultPosition={defaultPos} bounds="parent">
      <div 
        ref={nodeRef}
        className="absolute w-24 flex flex-col items-center justify-center gap-1 cursor-default group"
        onDoubleClick={() => onDoubleClick?.(id)}
      >
        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-transparent group-hover:bg-black/10 group-active:bg-black/30 transition-colors border border-transparent shadow-sm">
          <Icon size={48} className={`drop-shadow-md ${color}`} />
        </div>
        <span className="text-white text-[12px] font-medium px-1.5 py-0.5 rounded shadow-sm text-center leading-tight drop-shadow-md decoration-transparent group-active:bg-blue-600">
          {name}
        </span>
      </div>
    </Draggable>
  );
}
