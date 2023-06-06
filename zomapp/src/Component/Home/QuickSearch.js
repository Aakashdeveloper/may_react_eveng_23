import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const base_url = "http://3.17.216.66:4000";

const QuickSearch = () => {

    const [mealType,setMealType] = useState()

    useEffect(() => {
        fetch(`${base_url}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)
        })
    },[])

    return(
        <div class="quickSearch">
            <span id="QuickSearchHeading">
                Quick Search
            </span>
            <span id="QuickSubHeading">
                Find Restaurant By MealType
            </span>
            <div>
                <QuickDisplay mealData={mealType}/>
            </div>
        </div>
    )
}

export default QuickSearch