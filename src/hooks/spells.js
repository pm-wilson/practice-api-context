import { useContext, useEffect, useState } from 'react';
import { SpellContext } from '../context/SpellContext';
import { getSpellsByLevelApi } from '../services/getSpellsByLevelApi';

export const useSpells = () => {
  const [spellList, setSpellList] = useState([]);
  const { spellLevel } = useContext(SpellContext);

  useEffect(() => {
    console.log('hereeeee');
    getSpellsByLevelApi(spellLevel)
      .then(fetchedSpells => setSpellList(fetchedSpells));
  }, [spellLevel]);

  console.log('spell list here', spellList);

  return { spellList };
};

