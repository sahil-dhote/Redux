import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';
import { useState } from 'react';





const CounterTest1 = () =>{

    const [amount, setAmount] = useState(0);
    
    
      /*
        using useSelector we are getting the state that we have declared in counterSlice.js file
        in this - const initialState = {value: 0}
        Breking down - state.counter.value
        - we are using state as we have passed as parameter
        - we are using counter as we have named that in counterSlice.js file "name:counter"
        - we are using value as we have initiated that in inintialState variable
        Note:- I have tried changine "value" name but then it doesnt work it should always be called as "value"
      */
      const count = useSelector((state)=>state.counter.value)
      
    
      /*
        We need to use dispatch to fire the action in counterSlice.js 
        we are already passing - decrement and increment above
      */
    
      const dispatch = useDispatch();
    
    
      function handleIncrement(){
        dispatch(increment())
      }
    
      function handleDecrement(){
        dispatch(decrement())
      }
    
      function handleReset(){
        dispatch(reset())
      }
    
      function handleByAmount(){
        dispatch(incrementByAmount(amount))
      }




    return(
        <>
            <h1>Counter Test 1</h1>

            <div className='container'> 


            <button onClick={handleIncrement}> + </button>
                <p>Count: {count} </p>
            <button onClick={handleDecrement}> - </button>
            <br />
            <button onClick={handleReset}> Restart </button>
            <br/>
            <input
                type='Number'
                value={amount}
                placeholder='Enter Amount'
                onChange={(e)=>setAmount(e.target.value)}
            >
            </input>
            <br/>

            <button onClick={handleByAmount}>By Amount</button>
            </div>
        </>
    )
}


export default CounterTest1;