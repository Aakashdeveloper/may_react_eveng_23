import React from 'react';
import './Footer.css';

const Footer = () => { 
    return(
        <footer>
            <hr/>
            <h2>&copy; Developer Funnel</h2>
            <div class="footdiv">
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div class="footdiv">
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div class="footdiv noBorder">
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div id="socialFoot">
                <a href="#">
                    <img src="https://i.ibb.co/TTp516h/facebook.png" alt="fb"
                    class="socialIcon"/>
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="fb"
                    class="socialIcon"/>
                </a>
                <a href="#">
                    <img src="https://i.ibb.co/4jxsYSP/yt3.png" alt="fb"
                    class="socialIcon"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;