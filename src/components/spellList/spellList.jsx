import React from 'react';
import { useSpells } from '../../hooks/spells';
import SpellListItem from './spellListItem';
import styles from '../styles.css';

const SpellList = () => {
  const spells = useSpells();

  console.log(spells, 'spells');



  const spellItems = spells.length ?  spells.map(spell => {
    <div key={spell.index}>
      <SpellListItem {...spell}/>
    </div>;
  }) : 'Loading';
  const dropdowns = Array(10);

  return (
    <div>
      <h2>Spell List</h2>
      <h3>Level
        <form>
          <select 
            name="spell-level"
          >
            {dropdowns.map((n, i) => {
              <option value={i - 1}>{i - 1}</option>;
            })}
          </select>
        </form>
      </h3>
      <div>
        {spellItems}
      </div>
    </div>
  );
};

export default SpellList;
