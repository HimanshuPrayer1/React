import React, { useState } from 'react'

function Calc() {
    const [s, d] = useState();
    const [s1, d1] = useState();
    const [s2, d2] = useState();
    let [sum, dsum] = useState(1)
    function cl(c) {
        let a = parseFloat(s);
        let h = parseFloat(s1)
        if (c === "+") {
            dsum(a + h)
        } else if (c ==="*") {
            dsum(a * h)

        } else if (c === "-") {
            dsum(a - h);
        } else if (c === "/") {
            dsum(a / h)
        } else {
            alert('pls enter valid operator')
        }
    }

    return (
        <div>
            <label>Enter first number</label>
            <input onChange={(e) => d(e.target.value)} type='text'></input>
            <label>Enter Second Number</label>
            <input onChange={(e) => d1(e.target.value)} type='text'></input>
            <button value="+"  onClick={() => cl('+')}>+</button>
            <button value="+" onClick={() => cl('*')}>*</button>
            <button value="+" onClick={() => cl('-')}>-</button>
            <button value="+" onClick={() => cl('/')}>/</button>

            <h2>{sum}</h2>


        </div>
    )
}

export default Calc