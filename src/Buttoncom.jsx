import './App.css';
import { Button } from 'antd';
function Buttoncom() {
  const onBtnClick=(e)=>{
console.log("i ckikced btn")
  }
  return (
    <div className="App">
      <Button type="default"
      onClick={onBtnClick}>Button</Button>
    </div>
  );
}

export default Buttoncom;