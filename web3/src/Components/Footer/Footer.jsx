import React from "react";
import './footer.css'

export default function Footer(){
    return(

        <div className="footer">
            <div className="left">
                <p>
                Copyright © 2024
                </p>
            </div>
            <div className="right">
            
            <a href="/terms">Terms</a>
            <span className="divider">|</span>
            <a href="/privacy">Privacy</a>

            </div>
        </div>

    )
}