import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={item.meal_image} alt="lunch"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading1">
                                    {item.mealtype}
                                </div>
                                <div class="componentHeading2">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <>
            {listMeal(props)}
        </>
        
    )
}

export default QuickDisplay;