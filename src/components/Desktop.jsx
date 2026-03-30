import React, { useState } from 'react';
import Draggable from 'react-draggable';

const FolderIcon = ({ color = '#4A9CEA' }) => (
  <svg viewBox="0 0 60 50" width="52" height="44" fill="none">
    <path d="M2 8a6 6 0 016-6h13l4 6H52a6 6 0 016 6v30a6 6 0 01-6 6H8a6 6 0 01-6-6V8z" fill={color} />
    <path d="M2 18h56v26a6 6 0 01-6 6H8a6 6 0 01-6-6V18z" fill={color === '#4A9CEA' ? '#5BB0F5' : '#a7c5f0'} />
    <path d="M2 18h56" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    <ellipse cx="30" cy="36" rx="20" ry="6" fill="rgba(255,255,255,0.08)" />
  </svg>
);

export default function Desktop({ children }) {
  const [icons, setIcons] = useState([
    {
      id: '1', name: 'Macintosh HD', type: 'folder', color: '#888',
      pos: { x: window.innerWidth - 100, y: 40 }
    },
  ]);
  const [contextMenu, setContextMenu] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const createFolder = () => {
    const id = Date.now().toString();
    setIcons(prev => [...prev, {
      id, name: 'Adsız Klasör', type: 'folder', color: '#4A9CEA',
      pos: { x: contextMenu.x - 30, y: contextMenu.y - 30 }
    }]);
    setContextMenu(null);
  };

  const startRename = (id, currentName) => {
    setEditingId(id);
    setEditName(currentName);
  };

  const commitRename = () => {
    setIcons(prev => prev.map(ic => ic.id === editingId ? { ...ic, name: editName } : ic));
    setEditingId(null);
  };

  return (
    <div
      style={{ position: 'absolute', inset: 0, paddingTop: '24px', paddingBottom: '80px' }}
      onContextMenu={handleContextMenu}
      onClick={() => setContextMenu(null)}
    >
      {icons.map(icon => (
        <DraggableIcon
          key={icon.id}
          icon={icon}
          editingId={editingId}
          editName={editName}
          setEditName={setEditName}
          startRename={startRename}
          commitRename={commitRename}
        />
      ))}

      {children}

      {/* Context Menu */}
      {contextMenu && (
        <div
          style={{
            position: 'fixed',
            top: contextMenu.y,
            left: contextMenu.x,
            zIndex: 500,
            background: 'rgba(240,240,240,0.85)',
            backdropFilter: 'blur(40px) saturate(200%)',
            WebkitBackdropFilter: 'blur(40px) saturate(200%)',
            borderRadius: '10px',
            border: '0.5px solid rgba(0,0,0,0.18)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)',
            width: '220px',
            padding: '5px 0',
            fontSize: '13px',
            color: '#1a1a1a',
          }}
          onClick={e => e.stopPropagation()}
        >
          <ContextItem onClick={createFolder}>Yeni Klasör</ContextItem>
          <div style={{ height: '0.5px', background: 'rgba(0,0,0,0.12)', margin: '4px 0' }} />
          <ContextItem onClick={() => setContextMenu(null)}>Bilgiyi Göster</ContextItem>
          <ContextItem onClick={() => setContextMenu(null)}>Masaüstünü Özelleştir...</ContextItem>
          <ContextItem onClick={() => setContextMenu(null)}>Sıralama Seçenekleri</ContextItem>
        </div>
      )}
    </div>
  );
}

function ContextItem({ children, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '5px 16px',
        cursor: 'default',
        borderRadius: '6px',
        margin: '0 5px',
        background: hover ? '#3a7de8' : 'transparent',
        color: hover ? 'white' : '#1a1a1a',
        transition: 'background 0.1s',
        fontWeight: 400,
      }}
    >
      {children}
    </div>
  );
}

function DraggableIcon({ icon, editingId, editName, setEditName, startRename, commitRename }) {
  const nodeRef = React.useRef(null);
  const [selected, setSelected] = React.useState(false);

  return (
    <Draggable nodeRef={nodeRef} defaultPosition={icon.pos} bounds="parent">
      <div
        ref={nodeRef}
        style={{
          position: 'absolute',
          width: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          cursor: 'default',
        }}
        onClick={(e) => { e.stopPropagation(); setSelected(true); }}
        onDoubleClick={() => startRename(icon.id, icon.name)}
      >
        <div style={{
          padding: '4px',
          borderRadius: '10px',
          background: selected ? 'rgba(70,130,220,0.35)' : 'transparent',
          transition: 'background 0.1s',
        }}>
          <FolderIcon color={icon.color} />
        </div>

        {editingId === icon.id ? (
          <input
            autoFocus
            value={editName}
            onChange={e => setEditName(e.target.value)}
            onBlur={commitRename}
            onKeyDown={e => e.key === 'Enter' && commitRename()}
            style={{
              fontSize: '11px',
              textAlign: 'center',
              background: '#3a7de8',
              color: 'white',
              border: 'none',
              outline: 'none',
              borderRadius: '3px',
              padding: '1px 4px',
              width: '72px',
            }}
            onClick={e => e.stopPropagation()}
          />
        ) : (
          <span style={{
            fontSize: '11px',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.3,
            padding: '1px 4px',
            borderRadius: '3px',
            background: selected ? 'rgba(70,130,220,0.6)' : 'transparent',
            textShadow: '0 1px 3px rgba(0,0,0,0.8)',
            maxWidth: '76px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {icon.name}
          </span>
        )}
      </div>
    </Draggable>
  );
}
