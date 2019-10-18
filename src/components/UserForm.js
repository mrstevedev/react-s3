import React, { Component, Fragment } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  formGroup: {
    backgroundColor: '#fbfbfb',
    boxShadow: '0 2px 2px #ccc',
    padding: '2rem'
  }
};
export class UserForm extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      name: '',
      email: '',
      message: 'What would you like to say.',
      validEmail: false,
      isSuccess: false
    };
  }
  
  onChange = (e) => {
    console.log('onChange ran');
  }

  validateEmail = (e) => {
    console.log('onBlur email Ran')
    const email = e.target.value;
    if (!email) {
      this.setState({
        validEmail: true,
      });
    } else {
      this.setState({
        validEmail: false,
      });
    }
  }

  validateMessage = e => {
      console.log('onBlur message Ran');
      const message = e.target.value;
      if (!message) {
        this.setState({
            message: 'Please enter a message',
        });
      } else {
        this.setState({
            message: 'What would you like to say.',
        });
      }
  }

  render() {
    const { validEmail, message } = this.state;
    return (
      <Fragment>
          <Grid 
            container
            spacing={0}
            direction="column"
            justify="center"
            style={{ minHeight: '20vh' }}>
              <h4>Amazon AWS S3 trigger Lambda Function</h4>
          </Grid>
        <Grid
            container
            spacing={0}
            direction="column"
            justify="center"
            style={{ minHeight: '50vh' }}>
          <FormGroup style={styles.formGroup}>
            <FormControl margin="normal">
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Please enter your name.
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input 
                id="my-input" 
                aria-describedby="my-helper-text" 
                />
              <FormHelperText id="my-helper-text">
                {validEmail ? 'Please enter a valid Email' : "We'll never share your email."}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel htmlFor="my-input">Message</InputLabel>
              <Input 
                id="my-input" 
                aria-describedby="my-helper-text"
                onBlur={this.validateMessage}
                onChange={this.onChange} 
                />
              <FormHelperText id="my-helper-text">
                {message}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal">
              <Button>Submit</Button>
            </FormControl>
          </FormGroup>         
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(UserForm);
