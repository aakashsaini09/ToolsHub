import { useState } from 'react';
import ColorPicker from 'react-pick-color';
const ColorPickerComp  = () => {
    const [color, setColor] = useState('#be00ff');
  return <div className='w-[100vw] h-[100vh] bg-[#1e211f] flex flex-col justify-center items-center'>
    <div className='text-center font-bold text-5xl text-white font-serif mb-7'>Color Picker</div>
      <ColorPicker color={color} onChange={color => setColor(color.hex)}
      theme={{
        background: 'transparent',
        inputBackground: 'white',
        borderColor: 'darkgray',
        borderRadius: '8px',
        color: 'black',
        width: '40vw',
      }}/>;
    </div>
}

export default ColorPickerComp