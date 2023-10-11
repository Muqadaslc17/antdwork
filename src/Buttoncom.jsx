import './App.css';
import { Button } from 'antd';
import { useState } from 'react';


function Buttoncom() {
  const [Loading,setLoading]=useState(false);
  
  const onBtnClick=(e)=>{
console.log("i ckikced btn");
setLoading(true);
setTimeout (()=>{
setLoading(false)
},4000) 
}


  return (
    <div className="App">
      <Button type="default"
      onClick={onBtnClick}
      loading={Loading}>Button</Button>
    </div>
  );
}

export default Buttoncom;