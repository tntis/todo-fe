import React from 'react';
import {TextField, Paper, Button, Grid} from '@mui/material';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: {title: ""}}
    this.addTodo = props.add;
  }

  onInputChange = e => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({item: thisItem});
    // console.log(thisItem);
  }

  onButtonClick = () => {
    const thisItem = this.state.item;
    if (thisItem.title === '') {
      alert('Todo 제목을 입력해 주세요.');
      return;
    }
    this.addTodo(thisItem);
    this.setState({item: {title: ""}});
  }

  onPressEnter = e => {
    if (e.key === 'Enter') {
      this.onButtonClick();
    }
  }

  render() {
    const {item} = this.state;

    return (
      <Paper style={{margin: 16, padding: 16}}>
        <Grid container>
          <Grid xs={11} md={11} item style={{paddingRight: 16}}>
            <TextField placeholder="Add Todo here" fullWidth
              value={item.title}
              onChange={this.onInputChange}
              onKeyPress={this.onPressEnter}
            />
          </Grid>
          <Grid xs={1} md={1} item>
            <Button fullWidth color="secondary" variant="outlined"
              onClick={this.onButtonClick}>
              +
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AddTodo;