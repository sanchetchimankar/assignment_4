import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputAdornment, TextField } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Link from "@material-ui/core/Link";

export default function FormDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
}) {
  const { id, name, email, phone, dob } = data;

  return (
    <div className="dailog">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          {id ? "Update user" : "Create new user"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder="Enter name"
              label="Name"
              variant="outlined"
              margin="dense"
              color="secondary"
              fullWidth
             
              helperText={
                name ? (
                  ""
                ) : (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <ErrorOutlineIcon
                      color="error"
                      style={{ marginRight: "5px" }}
                    />
                    Please enter a name
                  </span>
                )
              }
            />

            <TextField
              id="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Enter email"
              label="Email"
              variant="outlined"
              color="secondary"
              margin="dense"
              fullWidth
             
              helperText={
                email ? (
                  ""
                ) : (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <ErrorOutlineIcon
                      color="error"
                      style={{ marginRight: "5px" }}
                    />
                    Please enter a valid email address.{" "}
                    <Link href="#" color="secondary">
                      Learn more
                    </Link>
                  </span>
                )
              }
            />

            <TextField
              id="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              placeholder="Enter phone number"
              label="Phone Number"
              variant="outlined"
              color="secondary"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment positions="start">+91</InputAdornment>
                ),
              }}
              fullWidth
             
              helperText={
                phone && phone.match(/^\d{10}$/) ? (
                  ""
                ) : (
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <ErrorOutlineIcon
                      color="error"
                      style={{ marginRight: "5px" }}
                    />
                    Please enter a valid 10-digit phone number.{" "}
                    <Link href="#" color="secondary">
                      Learn more
                    </Link>
                  </span>
                )
              }
            />
            <TextField
              id="dob"
              value={dob}
              type="date"
              onChange={(e) => onChange(e)}
              placeholder="Enter Date of birth"
              variant="outlined"
              color="secondary"
              margin="dense"
              fullWidth
             
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button
            color="secondary"
            onClick={() => handleFormSubmit()}
            variant="contained"
          >
            {id ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
