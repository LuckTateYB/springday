import { useCallback, useEffect, useRef, useState } from 'react';

import './App.css';
import { FinalMessage } from './components/FinalMessage';
import { FlowerModal } from './components/FlowerModal';
import { Garden } from './components/Garden';
import { PlantFlower } from './components/PlantFlower';
import { flowers, type Flower } from './data/flowers';

const STORAGE_KEY = 'nuestro-jardin:hasPlantedFlower';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [discoveredFlowers, setDiscoveredFlowers] = useState<Set<string>>(() => new Set());
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [hasPlantedFlower, setHasPlantedFlower] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedFlower ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedFlower]);

  useEffect(() => {
    const audio = new Audio('/audio/background.mp3');
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const stopAmbientMusic = useCallback(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setIsMusicEnabled(false);
  }, []);

  const startAmbientMusic = useCallback(async () => {
    const audio = audioRef.current ?? new Audio('/audio/background.mp3');
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    try {
      await audio.play();
      setIsMusicEnabled(true);
    } catch {
      setIsMusicEnabled(false);
    }
  }, []);

  const handleMusicToggle = useCallback(async () => {
    if (isMusicEnabled) {
      stopAmbientMusic();
      return;
    }

    await startAmbientMusic();
  }, [isMusicEnabled, startAmbientMusic, stopAmbientMusic]);

  const handleFlowerSelect = (flower: Flower) => {
    setSelectedFlower(flower);
    setDiscoveredFlowers((current) => {
      const next = new Set(current);
      next.add(flower.id);
      return next;
    });
  };

  const handleModalClose = useCallback(() => {
    setSelectedFlower(null);
  }, []);

  const handlePlantFlower = () => {
    setHasPlantedFlower(true);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Intentionally ignore storage failures and continue the experience.
    }
  };

  const handleReset = () => {
    setDiscoveredFlowers(new Set());
    setSelectedFlower(null);
    setHasPlantedFlower(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage failures and keep the experience intact.
    }
  };

  const allFlowersDiscovered = discoveredFlowers.size === flowers.length;

  return (
    <main className="app-shell">
      <button
        type="button"
        className={`music-toggle ${isMusicEnabled ? 'is-on' : ''}`}
        aria-label={isMusicEnabled ? 'Pausar música de fondo' : 'Reproducir música de fondo'}
        aria-pressed={isMusicEnabled}
        onClick={handleMusicToggle}
      >
        {isMusicEnabled ? '♫ Música ON' : '♫ Música OFF'}
      </button>

      {!hasPlantedFlower ? (
        <>
          <Garden
            flowers={flowers}
            discoveredFlowers={discoveredFlowers}
            onSelectFlower={handleFlowerSelect}
          />

          {allFlowersDiscovered && <PlantFlower onPlant={handlePlantFlower} />}
          <FlowerModal flower={selectedFlower} onClose={handleModalClose} />
        </>
      ) : (
        <FinalMessage onReset={handleReset} />
      )}
    </main>
  );
}

export default App;
