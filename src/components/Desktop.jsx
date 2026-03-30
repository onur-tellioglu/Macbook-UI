import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon';
import { Folder } from 'lucide-react';

export default function Desktop({ children }) {
  const [icons, setIcons] = useState([
    { id: '1', name: 'Macintosh HD', icon: Folder, color: 'text-gray-300 fill-gray-300', pos: { x: window.innerWidth - 120, y: 50 } }
  ]);
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.pageX, y: e.pageY });
  };

  const handleCloseMenu = () => {
    if (contextMenu) setContextMenu(null);
  };

  const createFolder = () => {
    const newId = Date.now().toString();
    setIcons([
      ...icons,
      { id: newId, name: 'Adsız Klasör', icon: Folder, color: 'text-blue-400 fill-blue-400', pos: { x: contextMenu.x, y: contextMenu.y } }
    ]);
    setContextMenu(null);
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full pt-6 pb-20 overflow-hidden"
      onContextMenu={handleContextMenu}
      onClick={handleCloseMenu}
    >
      {icons.map((item) => (
        <DesktopIcon 
          key={item.id} 
          id={item.id} 
          name={item.name} 
          icon={item.icon} 
          color={item.color} 
          defaultPos={item.pos} 
        />
      ))}
      
      {children}

      {/* Context Menu */}
      {contextMenu && (
        <div 
          className="absolute z-50 bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-lg py-1.5 w-56 text-[13px] text-black font-medium"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <div 
            className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer"
            onClick={createFolder}
          >
            Yeni Klasör
          </div>
          <div className="h-px bg-black/10 my-1 font-bold"></div>
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer">
            Bilgiyi Göster
          </div>
          <div className="px-4 py-1 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={() => alert("Arka plan değiştirme sonra eklenecek.")}>
            Masaüstü Arka Planını Değiştir...
          </div>
        </div>
      )}
    </div>
  );
}
