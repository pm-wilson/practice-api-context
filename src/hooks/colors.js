import { useContext } from 'react';
import { ColorModeContext } from '../context/ColorModeContext';

export const useColorPicker = () => {
  const colorPicker = useContext(ColorModeContext);
  
  return colorPicker;
};
