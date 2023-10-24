import React from 'react'
import { useState } from "react";
import './paracount.css'

const ParaCount = () =>{
    const [para, setPara] = useState("");
    const [wordCount, setwordCount] = useState(0);
    const handleInputChange = (e) => {
        setPara(e.target.value);
      };
    
      const countWords = () => {
        const words = para.split(" ");
        setwordCount(words.length - 1);
      };
  return (
    <section id="para">
        <div className="paraMain">
            <h1 className='paraTitle'>Responsive Paragraph Word Counter</h1>
            <br />
            <textarea value={para} onChange={handleInputChange} onKeyUp={countWords} cols="30" rows="10" className='paragraph'></textarea>
            <br />
            <span className='num'>Word Count: {wordCount}</span> 
        </div>
    </section>
  )
}
export default ParaCount;
       