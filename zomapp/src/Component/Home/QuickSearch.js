import React,{Component} from 'react';
import './QuickSearch.css';
class QuickSearch extends Component {
    render(){
        return(
            <div class="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurant By MealType
                </span>
                <div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/8rPxkWP/lunch.jpg" alt="lunch"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading1">
                                Lunch
                            </div>
                            <div class="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/XjzPqYv/dinner.jpg" alt="lunch"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading1">
                                Lunch
                            </div>
                            <div class="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/q1fC2jW/nightlife.jpg" alt="lunch"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading1">
                                Lunch
                            </div>
                            <div class="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/wchCHfb/snacks.jpg" alt="lunch"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading1">
                                Lunch
                            </div>
                            <div class="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/YR0S6fV/drinks.jpg" alt="lunch"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading1">
                                Lunch
                            </div>
                            <div class="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                    <div class="tileContainer">
                        <div class="tileComponent1">
                            <img src="https://i.ibb.co/FVhSTWK/breakfast.jpg" alt="lunch"/>
                        </div>
                        <div class="tileComponent2">
                            <div class="componentHeading1">
                                Lunch
                            </div>
                            <div class="componentHeading2">
                                Start your day with exclusive breakfast options
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default QuickSearch