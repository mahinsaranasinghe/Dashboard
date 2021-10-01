import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
          name: 'Mon',
          Level: 5,
          Temp: 12
        },
        {
          name: 'Tue',
          Level: 4,
          Temp: 33
        },
        {
          name: 'Wed',
          Level: 2,
          Temp: 40
        },
        {
          name: 'Thu',
          Level: 3,
          Temp: 26
        },
        {
          name: 'Fri',
          Level: 5,
          Temp: 34
        },
        {
          name: 'Sat',
          Level: 1,
          Temp: 18
        },
        {
          name: 'Sun',
          Level: 3,
          Temp: 33
        },
      ];

      
    return (
      <div className="chart">
           
        <div className="chartItem">

              
          <h3 className="classTitle">Fan speed variation</h3>

          <ResponsiveContainer width="100%" aspect={2 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <YAxis/>               
            <Line type="monotone" dataKey="Level" stroke="#5550bd"/>
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray ="5 5"/>         
            <Legend/>
            </LineChart>

          </ResponsiveContainer>
        </div>

        <div className="chartItem">

              
          <h4 className="classTitle">Exterior temperature variation</h4>

          <ResponsiveContainer  width="100%" aspect={2 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <YAxis/>                     
            <Line type="monotone" dataKey="Temp" stroke="#5550bd"/>
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray ="5 5"/>      
            <Legend/>
            </LineChart>

          </ResponsiveContainer>
        </div>
      </div>

      
        
        
    );
}
