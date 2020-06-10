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
    padding: '2rem'
  },
  headerStyles: {
    padding: '0 2rem'
  }
};
export class UserForm extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      name: '',
      email: '',
      message: '',
      validEmail: false,
      isSuccess: false
    };
  }
  
  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    
    console.log('handleSubmit function');
  }


  render() {
    return (
      <Fragment>
          <Grid 
            container
            spacing={0}
            direction="column"
            justify="center"
            style={{ minHeight: '20vh' }}>
              <h2 style={ styles.headerStyles }>Reactjs application with Material UI on Amazon AWS S3 to trigger Lambda Function</h2>
          </Grid>
        <Grid
            container
            spacing={0}
            direction="column"
            justify="center"
            style={{ minHeight: '50vh' }}>
          <FormGroup style={styles.formGroup}>
            <form action="/submit" onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column'} }>
            <FormControl margin="normal">
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" required onChange={(e) => this.handleChange('name', e.target.value)} />
              <FormHelperText id="my-helper-text">
                Please enter your name.
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                type="email"
                id="my-input" 
                aria-describedby="my-helper-text" 
                required
                onChange={(e) => this.handleChange('email', e.target.value)}
                />
              <FormHelperText id="my-helper-text">
                { "We'll never share your email." }
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal">
              <InputLabel htmlFor="my-input">Message</InputLabel>
              <Input 
                id="my-input" 
                aria-describedby="my-helper-text"
                onChange={(e) => this.handleChange('message', e.target.value)} 
                required
                />
              <FormHelperText id="my-helper-text">
                {'What would you like to say'}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal">
              <Button 
                type="submit"
                fullWidth
                color="primary"
                className="submit-btn"
              >Submit</Button>
            </FormControl>
            </form>
          </FormGroup>         
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(UserForm);
