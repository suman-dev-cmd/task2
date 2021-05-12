import React,{useState}from 'react'
import Counter from './counter'
import Navbar from './header'

const Home = () => {
   const [item, setItem] = useState([
       {
           id:1,
           value:4
       },
       {
        id:2,
        value:0
        },
        {
            id:3,
            value:0
        }
   ])
   const onIncrement=counter=>{
    const  counters = [...item]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    setItem(counters)
   }
   const onDecrement=counter=>{
    const  counters = [...item]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    if(counters[index].value !=0){
        counters[index].value--
    }
    
    setItem(counters)
   }
   const onReset=()=>{
    const reset = item.map(obj=>{
        obj.value=0
        return obj
    })
    setItem(reset)
   }
   const onDelete = (id)=>{
       const deletei = item.filter(obj=>obj.id !== id)
       setItem(deletei)
   }
    return (
        <>
        <Navbar totalNumber={item.filter(obj=>obj.value>0).length}/>
        <div class="container-fluid mt-5" style={{height:"80vh"}}>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div className="card text-center">
                    <div className="card-header">
                        Cart System
                     <button onClick={onReset} className="btn btn-warning m-2 btn-sm" style={{float:'right'}}>Reset</button>

                    </div>
                    <div className="card-body">
                        {
                            item.map((obj,i)=>
                                <Counter item={obj} key={i} onIncrement={onIncrement} onDelete={onDelete} onDecrement={onDecrement}/>
                            )
                        }
                    </div>
                    <div className="card-footer text-muted">
                        @cn-task2
                    </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        </>
    )
}

export default Home
