import React from 'react'
import { useState } from 'react'
import data from './data'
import './style.css'

function Accordion() {
    const [selected, setSelected] = useState([]);
    const [multiSelect, setMultiSelect] = useState(false);

    function handleMultiSelection(id) {
        let cpyMultiple= [...selected];
        const index = cpyMultiple.indexOf(id);
        if (index > -1) {
            cpyMultiple.splice(index, 1);
        } else {
            cpyMultiple.push(id);
        }
        setSelected(cpyMultiple);
    }

    function handleSingleSelection(id) {
        if (selected.includes(id)) {
            setSelected([]);
        } else {
            setSelected([id]);
        }
    }
  return (
    <div className="wrapper">
        <button onClick={() => setMultiSelect(!multiSelect)}>
            {multiSelect ? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>
       <div className="accordian">
         {data && data.length > 0 ? (
            data.map((item) => (
                <div className="item">
                    <div onClick={multiSelect ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)} className="title">
                        <h3>{item.question}</h3>
                        <span>{selected.includes(item.id) ? "-" : "+"}</span>
                    </div>
                    {selected.includes(item.id) && (
                        <div className="content">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))
        ) : (
            <p>No data available</p>
        )}
       </div>
    </div>
  )
}

export default Accordion