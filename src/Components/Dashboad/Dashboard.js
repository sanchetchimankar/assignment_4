import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, } from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Nav/Navbar";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import "./Dashboard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './../Pages/User';
import Report from './../Pages/Report';
import Users from "../Pages/Users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%",
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
  },
  sidebar: {
    position: "fixed",
    top: 40, 
    left: -25,
    height: "100%",
    width: 200,
    zIndex: 1,
  },
  content: {
    marginLeft: 200, 
    marginTop: 64,
    width:350 
  },
}));


const Dashboard = () => {
  const classes = useStyles();
  const [item, setItem] = useState("Home");

  const handleRender = (item) => {
    setItem(item.title);
  };

  useEffect(() => {
    toast.success("Welcome to the dashboard page!");
  }, []);
  

  return (
    <div className={classes.root}>
      {/* Navbar section */}
      <Grid item xs={12} className={classes.navbar}>
        <Navbar />
      </Grid>

      {/* Sidebar and content section */}
      <Grid container spacing={6}>
        <Grid item xs={5} sm={2} className={classes.sidebar}>
          <Sidebar handleRender={handleRender} />
        </Grid>
        <Grid item xs={10} sm={10} className={classes.content}>
        <ToastContainer />
          {item === "Home" && <Home />}
          {item === "Contact" && <Contact />}
          {item === "User" && <User />}
          {item === "Report" && <Report />}
          {item === "Users" && <Users />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
