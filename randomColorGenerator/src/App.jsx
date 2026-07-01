import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const hexString = "0123456789ABCDEF"
  function changeColor(){
      let randomColor = "#"
      for(let i = 0 ; i < 6 ; i++){
        randomColor += hexString[Math.floor(Math.random() * hexString.length)]
        console.log(color)
      }
      setColor(randomColor)
      // console.log(count)
  }

  return (
    <>
     <div  className="w-full h-screen flex justify-center items-center duration-200 " 
     style={{background:color}}
     >
      <button className='p-10 rounded-full text-black shadow-lg bg-white'
      onClick={
        () => changeColor()
      }
      >
        Change Color
      </button>

      </div>
    </>
  )
}

export default App
