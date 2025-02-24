import { useReducer } from "react";

function Funct1(state , action){
    switch(action.type){
        case "changeName": 
        return {...state, name: action.value};
        case "changeAge":
            return {...state, age: action.value};
        default:
            return state;
    }
}

function ReducerExamp(){
    const [{name,age},dispatch]=useReducer(Funct1 ,{
        name: "John Doe",
        age: 25,
    });
    return(
        <>
        <h1>Reducer Examples</h1> <br />
        <input 
        type="text" 
        value={name} 
        onChange={(e)=>
            dispatch({type:"changeName", value:e.target.value})
            } 
        />
        <br />
        name is {name}
        <br />
        <br />

        <input 
        type="text" 
        value={age} 
        onChange={(e)=> 
            dispatch({type:"changeAge", value:e.target.value})
            } 
        />
        <br />
        age is {age}
        </>

    );
}

export default ReducerExamp;
