import "./temperature.css"
import { DataGrid } from '@mui/x-data-grid';

export default function Temperature() {
    const columns = [
        { field: 'id', headerName: 'No', width: 120 },
        { field: 'day', headerName: 'Day', width: 200 },
        { field: 'temp', headerName: 'Exterior Temperature', width: 250 },
        {
          field: 'i_temp',
          headerName: 'Interior Temperature',
          width: 250,
        }
        ,
        {
          field: 't_lvl',
          headerName: 'Temperature level',
          /*type: 'number',*/
          width: 250,
        },

      ];
      
      const rows = [
        { id: 1, day: 'Monday', temp: 38, t_lvl: 'Moderate', i_temp: 35 },
        { id: 2, day: 'Tuesday', temp: 42, t_lvl: 'High', i_temp: 39 },
        { id: 3, day: 'Wednesday', temp: 28, t_lvl: 'Low' , i_temp: 26 },
        { id: 4, day: 'Thursday', temp: 31, t_lvl: 'Low' , i_temp: 28},
        { id: 5, day: 'Friday', temp: 39, t_lvl: 'High' , i_temp: 34},
        { id: 6, day: 'Saturday', temp: 37, t_lvl: 'Moderate' , i_temp: 35},
        { id: 7, day: 'Sunday', temp: 30, t_lvl: 'Low' , i_temp: 28},

      ];

    return (

        <>
        
        <div className="Temperature">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        <div className="summary" >
            Summarized Table
        </div>


        </>
    )
}


   
