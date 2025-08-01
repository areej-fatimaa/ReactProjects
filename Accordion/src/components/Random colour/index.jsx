import React from 'react'
import { useState,useEffect } from 'react'

function RandomColour() {
    const[typeOfColor, setTypeofColor] = useState('hex');
    const [color, setColor] = useState("#000000");

    function handleCreateRandomHexColor(){
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let randomHex="#";
        for(let i=0; i<6; i++){ 
            const randomIndex=Math.floor(Math.random()*hex.length);
            randomHex+=hex[randomIndex];
        }
        setColor(randomHex);
    }
    function handleCreateRandomRgbColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }
   useEffect(() => {
       if (typeOfColor === 'hex') {
           handleCreateRandomHexColor();
       } else {
           handleCreateRandomRgbColor();
       }
   }, [typeOfColor]);

  return (
    <div style={{
        width: "100%",
        height: "100vh",
        background:color,
    }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <button onClick={() => setTypeofColor('hex')}>Create HEX Colour</button>
        <button onClick={() => setTypeofColor('rgb')}>Create RGB Colour</button>
        <button onClick={typeOfColor==="hex"?handleCreateRandomHexColor:handleCreateRandomRgbColor}>Generate Random Colour</button>
        </div>
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize:"60px",
                marginTop: "50px"
            }
        }>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColour