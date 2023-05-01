import React,{useState} from 'react'
import "./userList.css";
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

import { DeleteOutline } from '@mui/icons-material'

import DefaultLayout from '../../layout/DefaultLayout';


import { DataGrid } from '@mui/x-data-grid';



const UserList = () => {
  const [data, setData] = useState(userRows);
  console.log(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      {/* <Topbar /> */}
      {/* <div className="container"> */}
        {/* <Sidebar /> */}
        
        <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
          
        {/* </div> */}
      </div>
    
    </>

  );
}
// export default UserList;
// export default UserLayout( UserList);
export default DefaultLayout(UserList);
