import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';
import useTitle from './customehook';

const url = "http://3.17.216.66:4000/restaurants"

function HooksComponent(){

    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [restaurants, setRetaurants] = useState();
    const [record] = useState(0);


    const updateCount = () => {
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("inside useEffect");
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRetaurants(data)
        })
        
    },[count1])

    useTitle(record)

    return(
        <>
            <h1>HooksComponent</h1>
            <h2>{title}</h2>
            <h3>{count}</h3>
            <h3>{count1}</h3>
            <button onClick={updateCount}>
                Counter
            </button>
            <button onClick={() => {setCount1(count1+1)}}>
                Counter1
            </button>
            <DisplayComponent restData={restaurants}/>
        </>
        
    )
}

export default HooksComponent;