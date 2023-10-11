import './App.css';
import { Button } from 'antd';
import { useState } from 'react';
import {ArrowRightOutlined} from '@antd-design/icons'

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
      loading={Loading}
//icon={ArrowRightOutlined}
    >Button</Button>
    </div>
  );
}

export default Buttoncom;