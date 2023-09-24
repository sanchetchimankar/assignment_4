import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    backgroundColor: '#fff', 
    padding: theme.spacing(4),
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  form: {
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img
            src="https://img.freepik.com/premium-photo/words-with-contact-us-business-concept-idea_352439-357.jpg"
            alt="Contact Us"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.form} noValidate>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              className={classes.textField}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.textField}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              className={classes.textField}
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactPage;
