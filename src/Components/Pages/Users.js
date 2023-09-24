import React, { useState, useEffect } from "react";
import "./About.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Grid, Button, IconButton } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormDialog from "../dailog";
import { toast } from "react-toastify";
import { Delete, Edit } from "@material-ui/icons"; // import the icons
import axios from "axios"; // Import axios

const initialValue = { name: "", email: "", phone: "", dob: "" };

function Users() {
  const [gridApi, setGridApi] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(initialValue);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
  };

  const url = "http://localhost:4000/GridApp";

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Phone No", field: "phone" },
    { headerName: "Date of Birth", field: "dob" },
    {
      headerName: "Actions",
      field: "id",
      cellRendererFramework: (params) => (
        <div className="button">
          <IconButton
            onClick={() => handleUpdate(params.data)}
            aria-label="edit"
            style={{ color: "green" }} // set the color to green
          >
            <Edit />
          </IconButton>

          <IconButton
            onClick={() => handleDelete(params.value)}
            aria-label="delete"
            style={{ color: "red" }} // set the color to red
          >
            <Delete />
          </IconButton>
        </div>
      ),
      cellStyle: { display: "flex", justifyContent: "center" },
      cellClass: "actions-cell",
    },
  ];

  // calling getGridApp function for first time
  useEffect(() => {
    getGridApp();
  }, []);

  //fetching user data from server
  const getGridApp = () => {
    axios.get(url)
      .then((resp) => setTableData(resp.data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const onGridReady = (params) => {
    setGridApi(params);
  };

  const handleUpdate = (oldData) => {
    setFormData(oldData);
    toast.info("Are you sure you want to update this row?", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      onClose: () => {
        handleClickOpen();
      },
    });
  };

  const handleDelete = (id) => {
    toast.info("Are you sure you want to delete this user?", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      onClose: () => {
        axios.delete(url + `/${id}`)
          .then(() => {
            toast.success("User deleted successfully.");
            getGridApp();
          })
          .catch((error) => {
            toast.error("Failed to delete user.");
          });
      },
    });
  };

  const handleFormSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.dob) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a 10-digit phone number.");
      return;
    }

    if (formData.id) {
      const confirm = window.confirm("Are you sure, you want to update this row ?");
      confirm &&
        axios.put(url + `/${formData.id}`, formData, {
          headers: {
            "content-type": "application/json",
          },
        })
          .then(() => {
            toast.success("User updated successfully.");
            handleClose();
            getGridApp();
          })
          .catch((error) => {
            toast.error("Failed to update user.");
          });
    } else {
      axios.post(url, formData, {
        headers: {
          "content-type": "application/json",
        },
      })
        .then(() => {
          toast.success("User added successfully.");
          handleClose();
          getGridApp();
        })
        .catch((error) => {
          toast.error("Failed to add user.");
        });
    }
  };

  const defaultColDef = {
    sortable: true,
    flex: 1,
    filter: true,
  };

  return (
    <div className="App">
      <Grid align="right">
        <Button variant="contained" color="lightblue" onClick={handleClickOpen}>
          + Add user
        </Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: "400px" }}>
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={6}
        />
      </div>
      <FormDialog
        open={open}
        handleClose={handleClose}
        data={formData}
        onChange={onChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Users;
