import React from 'react'
import "./topbar.css"
import {Info, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <>
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        {/*<img src={process.env.PUBLIC_URL+"/Divor.png"} width="141" alt="image"></img>*/}
                        DIVOR Automations
                    </div>   
                    
                    
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Info/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                </div>
            </div>
            
        </div>

        

    </>    
    )
}
