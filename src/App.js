
import './App.css';
import CanvasDraw from "react-canvas-draw"
import {useRef, useState} from "react"
import Button from "./components/Button"

const App = () => {
  const canvasRef = useRef(undefined)
  const [title, setTitle] = useState("")
  console.log(title)

  

  const handleClick = () => {

    console.log(canvasRef.current.getSaveData());
   
}

const handleUndo = () => {

  canvasRef.current.undo()
 
}
const handleClear = () => {

  canvasRef.current.clear()
 
const handleChange = (e) => {
  setTitle(e.target.value)
}
  
  return (
    <div className="flex flex-col items-center">
    <input type="text" onChange={handleChange} className="mb-4 mt-4 border border-black rounded-md"/>
     <CanvasDraw ref={canvasRef} hideGrid={true} canvasWidth={window.screen.availWidth/2} canvasHeight={window.screen.availHeight/2} className="border border-black rounded-md mb-4"/>
     <div className="flex justify-evenly w-1/4">
     
     <Button handleClick={handleUndo} name={'Undo'}/>
     <Button handleClick={handleClear} name={'Clear'}/>
     <Button handleClick={handleClick} name={'Save drawing'}/>
     </div>
     </div>
      
  );
}


export default App;
