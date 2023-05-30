import React from 'react';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataGrid } from '@mui/x-data-grid';

const TableView = () => {

    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/titulos`)
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
        { field: 'panteon', headerName: 'panteon',type: 'number', width: 200 },
        { field: 'folio', headerName: 'Folio',type: 'number', width: 200 },
        { field: 'nombreTitu', headerName: 'Nombre del Titular',type: 'number', width: 200 },
        { field: 'nombreBenefi', headerName: 'Nombre del Beneficiario',type: 'number', width: 200 },
        { field: 'noLote', headerName: 'No. de lote',type: 'number', width: 400 },
        { field: 'ubicacion', headerName: 'Ubicación',type: 'text', width: 400 },
        { field: 'libro', headerName: 'Libro',type: 'text', width: 400 },
        { field: 'foja', headerName: 'Foja',type: 'text', width: 400 },
        { field: 'folioTramite', headerName: 'Folio del tramite',type: 'text', width: 400 },

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
