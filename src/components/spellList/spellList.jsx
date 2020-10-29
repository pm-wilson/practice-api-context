import React from 'react';
import { useSpells } from '../../hooks/spells';
import { useColorPicker } from '../../hooks/colors';

const SpellList = () => {
  const { spellList } = useSpells();
  const { lightMode } = useColorPicker();
  const modeClass = lightMode ? '_1yf-o0z033RbAHQOAY1KRe' : '_2hAGQDxUbRuNG6XUTI7sOp';

  if(spellList.length === 0) return <h1>No Data</h1>;
  const spellListToShow = spellList.results;

  const spellItems = spellListToShow.map(spell => (<div key={spell.index}>{spell.name}</div>));

  return (
    <div className={modeClass}>
      <h2>Spell List</h2>
      <div>
        {spellItems}
      </div>
    </div>
  );
};

export default SpellList;
