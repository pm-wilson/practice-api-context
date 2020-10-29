import { useEffect, useState } from 'react';
import { getSpellsApi } from '../services/getSpellsApi';

export const useSpells = () => {
  const [spellList, setSpellList] = useState([]);

  useEffect(() => {
    getSpellsApi()
      .then(fetchedSpells => setSpellList(fetchedSpells));
  }, []);

  return { spellList };
};

