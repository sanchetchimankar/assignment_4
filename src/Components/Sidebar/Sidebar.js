import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FaHome, FaInfoCircle, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { BsGrid1X2 } from "react-icons/bs";

import { SidebarData } from './SidebarData';
const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "100vh",
    width: "200px",
    backgroundColor: "#f4f4f4",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  listItemIcon: {
    color: "black",
  },
  listItemText: {
    color: "black",
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <section>
        <div className={classes.sidebar}>
          <List>
            {SidebarData.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => props.handleRender(item)}
                className={classes.listItem}
              >
                <ListItemIcon className={classes.listItemIcon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  className={classes.listItemText}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
