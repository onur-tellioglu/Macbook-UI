import MenuBar from './components/MenuBar';
import Dock from './components/Dock';
import Desktop from './components/Desktop';

export default function App() {
  const handleAppClick = (appId) => {
    console.log(`App clicked: ${appId}`);
  };

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center select-none"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1628155930542-3c7a64e2c848?q=80&w=3540&auto=format&fit=crop")' }}
    >
      <MenuBar />
      <Desktop />
      <Dock onAppClick={handleAppClick} />
    </div>
  );
}
