import React from 'react'
import "./style.css";
import { useReducer} from 'react';

const reducer = (state, action) => {
 if(action.type === "INCR")
 {
     state=state+1;
 }
 if( action.type === "DECR")
 {
     if(state>0)
    {
        state = state-1;
    }
 }
 return state;
}

const UseReducer = () => {
const initialState=10;
//     const [myNum, setMyNum] = useState(initialState);
const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        <div className="center_div">
            <p>{state}</p>
        <div class="button2" onClick={ () => dispatch ( { type : "INCR" })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div class="button2" onClick={ () => dispatch ( { type : "DECR" })}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
        </div>
        </>
    );
};

export default UseReducer
