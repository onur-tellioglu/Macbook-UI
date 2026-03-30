import React, { useRef, useEffect, useState } from 'react';

export default function CameraApp({ width = 640, height = 452 }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function setupCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        streamRef.current = mediaStream;
        setReady(true);
      } catch (err) {
        console.error('Camera error:', err);
      }
    }
    setupCamera();
    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    };
  }, []);

  const takePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 1280;
    canvas.height = videoRef.current.videoHeight || 720;
    const ctx = canvas.getContext('2d');
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(videoRef.current, 0, 0);
    setPhoto(canvas.toDataURL('image/png'));
  };

  const savePhoto = () => {
    if (!photo) return;
    const a = document.createElement('a');
    a.href = photo;
    a.download = `MacBook Photo ${new Date().toLocaleString('tr-TR').replace(/[/:]/g,'-')}.png`;
    a.click();
  };

  return (
    <div style={{ width, height, background: '#000', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {!photo && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }}
        />
      )}

      {photo && (
        <div style={{
          width: '100%', height: '100%',
          background: '#1a1a1a',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          <img
            src={photo}
            alt="Captured"
            style={{
              maxWidth: '92%', maxHeight: '88%',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
              border: '2px solid rgba(255,255,255,0.08)',
              borderRadius: '2px',
            }}
          />
          <button
            onClick={() => setPhoto(null)}
            style={{
              position: 'absolute', top: '12px', left: '12px',
              background: 'rgba(255,255,255,0.15)', color: 'white',
              border: '0.5px solid rgba(255,255,255,0.25)',
              padding: '5px 14px', borderRadius: '6px',
              fontSize: '12px', fontWeight: 500, cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >← Geri Dön</button>
          <button
            onClick={savePhoto}
            style={{
              position: 'absolute', top: '12px', right: '12px',
              background: '#0A84FF', color: 'white',
              border: 'none',
              padding: '5px 16px', borderRadius: '6px',
              fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(10,132,255,0.5)',
            }}
          >↓ İndir</button>
        </div>
      )}

      {/* Camera button */}
      {!photo && (
        <div style={{
          position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}>
          {/* Red record ring button */}
          <button
            onClick={takePhoto}
            style={{
              width: '60px', height: '60px', borderRadius: '50%',
              border: '3px solid white',
              background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', outline: 'none',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.5)',
              transition: 'transform 0.1s',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#FF3B30' }} />
          </button>
        </div>
      )}

      {/* Timer / no camera warning */}
      {!ready && !photo && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(255,255,255,0.5)', fontSize: '14px',
        }}>Kamera bağlanıyor...</div>
      )}
    </div>
  );
}
