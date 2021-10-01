import "./humidity.css";
import { Chart } from "react-google-charts";

export default function Humidity() {
    return (

        <>
        <div className="summary_humidity" >
            Summarized Humidity
        
            <div className="barChart" >
                
                <Chart
                    width={'1000px'}
                    height={'400px'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Humidity', 'Last week Humidity', 'This week humidity'],
                        ['Monday', 91, 76],
                        ['Tuesday', 59, 92],
                        ['Wednesday', 97, 96],
                        ['Thursday', 99, 76],
                        ['Friday', 84, 98],
                    ]}
                    
                    options={{
                        title: 'Weekly Humidity Analysis',
                        chartArea: { width: '50%' },
                        isStacked: true,
                        hAxis: {
                        title: 'Humidity RH%',
                        minValue: 0,
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '3' }}
                />          
            </div> 
            
            <div className="Humidity">
                <Chart
                    width={'800px'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Day', 'Humidity'],
                        ['Monday', 35],
                        ['Tuesday', 19],
                        ['Wednesday', 24],
                        ['Thursday', 31],
                        ['Friday', 28],
                        ['Saturday', 22],
                        ['Sunday', 36],
                    ]}
                    
                    options={{
                        title: 'Humidity variation',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                
            </div>

        </div>

        </>
    )
}
