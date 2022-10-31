import React from 'react';
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {callLogin} from './service/ApiService';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    callLogin({email: email, password: password});
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">로그인</Typography>
          </Grid>
        </Grid>
        <form noValidate onSubmit={this.handleSubmit}>
          {' '}
          {/* submit 버튼을 클릭하면 handleSubmit이 실행됨 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth variant="filled" required type="email" id="email" label="이메일 주소" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="filled" required type="password" id="password" label="패스워드" name="password" />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">로그인</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default Login;
