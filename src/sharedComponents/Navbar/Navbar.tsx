import * as React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Navbar() {
  return (
    <div className="menuSection">
      <List component="nav">
        <Link className="noTextDecoration secondaryFontColor" to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link className="noTextDecoration secondaryFontColor" to="/questions">
          <ListItem button>
            <ListItemText primary="Questions" />
          </ListItem>
        </Link>
        <Link className="noTextDecoration secondaryFontColor" to="/create">
          <ListItem button>
            <ListItemText primary="Create" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
