import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { decrement, increment } from './actions';

const App = () => {

    const counter = useSelector(state => state.counterReducer);
    const isLogged = useSelector(state => state.loggedReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment(5))}>+</button>
            {counter}
            <button onClick={() => dispatch(decrement(5))}>-</button>
            {isLogged ? <p>Valuable information should not see</p> : null}
        </div>
    );
}

export default App;