import "./sidebar.css"
import {Home,HotTub, InvertColors, HelpOutline, AcUnit, SettingsRemote, Tune} from '@material-ui/icons';
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            
                <div className="sidebarMenu">
                    
                    <div>
                        <h3 className="sidebarTitle">
                            Dashboard
                        </h3>
                        <ul className="sidebarList">
                            <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <Home className="sidebarIcon"/>
                                Home
                            </li>                        
                            </Link>

                            <Link to="/Temperature" className="link">
                            <li className="sidebarListItem">
                                <HotTub className="sidebarIcon"/>
                                Temperature
                            </li>
                            </Link>

                            <Link to="/Humidity" className="link">
                            <li className="sidebarListItem">
                                <InvertColors className="sidebarIcon"/>
                                Humidity
                            </li>
                            </Link>

                        </ul>
                    </div>
                    
                    
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Controls
                    </h3>
                    <ul className="sidebarList">
                        
                        <li className="sidebarListItem">
                            <AcUnit className="sidebarIcon"/>
                            Fan Speed
                        </li>

                        <li className="sidebarListItem">
                            <SettingsRemote className="sidebarIcon"/>
                            Fan Control
                        </li>

                        <li className="sidebarListItem">
                            <Tune className="sidebarIcon"/>
                            Temperature Selection
                        </li>

                        <li className="sidebarListItem_help">
                            <HelpOutline className="sidebarIcon"/>
                            Help
                        </li>
                    </ul>
                    
                </div>

                
            </div>
        </div>

        
        
    )
}
