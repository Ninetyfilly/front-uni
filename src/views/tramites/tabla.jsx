import React from 'react';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid } from '@mui/x-data-grid';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const TableView = () => {

    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/tramites`)
        if(response.data.status == 'ok'){
            console.log(response.data.data)
            setData(response.data.data)
        }
        else {
          console.log('response.data.status',response.data.status)
          toast("Usuario o contraseña equivocados.", {
            autoClose: 2000,
            position:"top-center",
            theme: "dark"
          });
        }
    }

    const columns = [
        { field: 'NoConsec', headerName: 'No. Consecutivo',type: 'number', width: 200 },
        { field: 'fojasTotales', headerName: 'Fojas Totales',type: 'number', width: 200 },
        { field: 'folioInit', headerName: 'Folio Inicial',type: 'number', width: 200 },
        { field: 'folioFin', headerName: 'Folio Final',type: 'number', width: 200 },
        { field: 'asunto', headerName: 'asunto',type: 'text', width: 400 },
      ];

    // const data = [{},{},{}]
    

    return (
        <div className='tableDiv' style={{ height: 400, width: 800 }}>
            <ToastContainer/>
            <DataGrid
                rows={data}
                autoHeight
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    
    );
};

export default TableView;
