import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ToggleSwitch = ({onToggle}) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div className="-m-1">
      <div className="relative">
        <input
          type="checkbox"
          checked={isOn}
          onChange={toggleSwitch}
          className="sr-only" // Screen reader only, keeps it accessible
        />
        <div
          onClick={toggleSwitch} // Ensuring click on the div toggles the switch
          className={`block w-8 h-5 rounded-full cursor-pointer transition-colors duration-300 ${isOn ? ' bg-treva-Orange' : 'bg-treva-Orange opacity-50'}`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 flex items-center justify-center ${isOn ? 'transform translate-x-full' : ''}`}
        >
          <FontAwesomeIcon
            icon={isOn ? faCheck : faTimes}
            className={` text-xs transition-colors duration-300 ${isOn ? ' text-treva-Orange' : 'text-[#FF8D3D]'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
