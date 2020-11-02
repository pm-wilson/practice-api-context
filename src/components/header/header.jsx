import React from 'react';
import { useColorPicker } from '../../hooks/colors';

const Header = () => {
  const { lightMode, toggle } = useColorPicker();
  const modeClass = lightMode ? '_1yf-o0z033RbAHQOAY1KRe' : '_2hAGQDxUbRuNG6XUTI7sOp';
  const buttonClass = lightMode ? '_2hAGQDxUbRuNG6XUTI7sOp' : '_1yf-o0z033RbAHQOAY1KRe';

  return (
    <div className={modeClass}>
      <h1>Spell Book</h1>
      <button className={buttonClass} onClick={toggle}>{lightMode || lightMode === undefined ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
};

export default Header;
