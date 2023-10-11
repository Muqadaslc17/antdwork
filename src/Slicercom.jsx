import './App.css';
import React, { useState } from 'react';
import './index.css';
import { Slider, Switch } from 'antd';

function Slidercom() {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };
  
  return (
    <div className="App">
           <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
      
    </div>
  );
}

export default Slidercom;