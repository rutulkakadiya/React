import React, { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0)

  const increaseNumber = () =>{
    setCount(count + 1)
  }
  const decreaseNumber = () =>{
    setCount(count - 1)
  }
  const resetNumber = () =>{
    setCount(count * 0)
  }

  const increaseNumber1 = () =>{
    setCount(count + 10)
  }
  const increaseNumber2 = () =>{
    setCount(count + 100)
  }
  const increaseNumber3 = () =>{
    setCount(count + 1000)
  }

  const decreaseNumber1 = () =>{
    setCount(count - 10)
  }
  const decreaseNumber2 = () =>{
    setCount(count - 100)
  }
  const decreaseNumber3 = () =>{
    setCount(count - 1000)
  }
  return (

    <div>
      <div className="div1 h-[100vh] w-[100%]">
        <video autoPlay loop muted className='w-[100%]' src="./public/he46f64be_1284702.mov"></video>
      </div>

      <div className="counter h-[60vh] w-[50%] absolute top-[20vh] left-[25%] bg-[#155067] rounded-[30px]">

        <div className="txt">
          <center>

            <h2 className='text-center text-white mt-[50px] text-5xl'>Counter</h2>

            <div className="count h-[100px] w-[150px] bg-white mt-3 rounded-[15px] flex justify-center items-center">
              
                <p className='text-5xl'>{count}</p>
                
            </div>

            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white' onClick={increaseNumber}>Increase</button>
            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white ms-3' onClick={decreaseNumber}>Decrease</button>
            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white ms-3' onClick={resetNumber}>Reset</button>
            <br />

            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white' onClick={increaseNumber1}>+ 10</button>
            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white ms-3' onClick={increaseNumber2}>+ 100</button>
            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white ms-3' onClick={increaseNumber3}>+ 1000</button>

            <br />

            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white' onClick={decreaseNumber1}>- 10</button>
            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white ms-3' onClick={decreaseNumber2}>- 100</button>
            <button className='btn1 h-[45px] w-[100px] rounded-[5px] mt-3 bg-white ms-3' onClick={decreaseNumber3}>- 1000</button>
            
          </center>
        </div>

      </div>
    </div>
  )
}
