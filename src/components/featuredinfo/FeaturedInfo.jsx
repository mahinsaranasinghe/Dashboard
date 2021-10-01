import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <>
        <div className="summary_title">
            Summary Report
        </div>

        <div className="featured">
        
            <div className="featuredItem">
                <span className="featuredTitle">Exterior Temperature</span>
                <div className="featuredTemperatureContainer">
                    <span className="featuredTemperatureLevel">36 C</span>
                    <span className="featuredTemperature">
                        <ArrowUpward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredTemperatureState">Compared to previous hour</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Interior Temperature</span>
                <div className="featuredTemperatureContainer">
                    <span className="featuredTemperatureLevel">25 C</span>
                    <span className="featuredTemperature">
                        <ArrowDownward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredTemperatureState">Compared to previous hour</span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">Humidity</span>
                <div className="featuredTemperatureContainer">
                    <span className="featuredTemperatureLevel">98% RH</span>
                    <span className="featuredTemperature">
                        <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredTemperatureState">Compared to previous hour</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Fan Speed</span>
                <div className="featuredTemperatureContainer">
                <span className="featuredTemperatureLevel">Level 2</span>
                    <span className="featuredTemperature">
                        <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredTemperatureState">Compared to previous hour</span>
            </div>
            
        </div>
        
       
        </>
        
       
    )
}
