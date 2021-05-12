import React from 'react'

const Counter = ({item,onIncrement,onDecrement,onDelete}) => {
    return (
        <div>
            <span className="m-5 text-warning">{item.value}</span>
            <button onClick={(e)=>onIncrement(item)} className="btn btn-secondary m-2 btn-sm">increment</button>
            <button onClick={(e)=>onDecrement(item)} className="btn btn-primary m-2 btn-sm">decrement</button>
           
            <button onClick={(e)=>onDelete(item.id)} className="btn btn-danger m-2 btn-sm">delete</button>
        </div>
    )
}

export default Counter
