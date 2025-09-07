import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(0)


    // num is a variable that store the initial value 0
    //  setNum is a function that updates the value of num

    const increase = () => {
        setNum(num + 1)

    }

    const decrease = () => {
        if (num >= 1) {
            setNum(num - 1)
        }
    }

    useEffect(()=>{
        alert("State Changed")
    },[])





    return (
        <div className='text-center'>
            <h1 className='text-center'>The initial state is<br /><span className='display-1'>{num}
            </span><br /></h1>


            {
                num < 10 && <button className='btn btn-warning me-2' onClick={increase}>Up</button>
            }
            {

            
            num >0 &&<button className='btn btn-danger me-2' onClick={decrease}>Down</button>
}

        </div>
    )
}

export default Counter
