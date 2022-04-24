import next from 'next';
import { useState, useEffect } from 'react';

const Phase = {
  Typing: 'Typing',
  Pausing: 'Pausing',
  Deleting: 'Deleting',
};

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

export const useTypeWriter = (words) => {
  const [type, setType] = useState('');
  const [phase, setPhase] = useState(Phase.Typing);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextType = words[selectedIndex].slice(0, type.length + 1);

        if (nextType == type) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setType(nextType);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!type) {
          const nextIndex = selectedIndex + 1;
          setPhase(Phase.Typing);
          setSelectedIndex(words[nextIndex] ? nextIndex : 0);
          return;
        }
        const nextRemaining = words[selectedIndex].slice(0, type.length - 1);

        const timeout = setTimeout(() => {
          setType(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);

        return () => clearTimeout(timeout);
    }
  }, [words, type, selectedIndex, phase]);

  return type;
};
