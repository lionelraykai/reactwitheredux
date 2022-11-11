import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber} from './action/index';

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch()
  return(
    <>
    <div className='container'>
      
      <h1>Increament/Decreament counter</h1>
      <h4>using React and Redux</h4>

      <div className='quantity'>
        <button className='quantity_minus' href='' title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></button>
        <input name='quantity' type="text" className='quantity_input' value={myState}/>
        <button className='quantity_plus' href='#' title="increament" onClick={()=> dispatch(incNumber())}><span>+</span></button>
      </div>
    </div>
    </>
  )
}

export default App