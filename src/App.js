import './App.css';
import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import {Paper, List, Container} from '@mui/material';
import {call} from './service/ApiService';

// npm -> Node Package eXension
// jsx -> JavaScript eXenstion

// 절차지향 개발 -> 객체지향 개발 -> 함수형 개발(Functional Programing)
// ES6+ (ECMAScript 2015+) 

// SPA -> Single Page Application
// SPA -> React(View), Vue.js(view), AngularJS
// CRA -> Create React App

class App extends React.Component{

  static API_BASE_PATH_TODO = '/todo/v7';

  constructor(props){
    super(props);
    this.state = {
      items : []
    }
  }

  componentDidMount(){
    console.log('App.componentDidMount()');
   
    call(App.API_BASE_PATH_TODO,"GET", null).then(data =>{
      console.log('GET /todo >> ',data);
      this.setState({items : data});
    })

    const requestOptions ={
      method : "GET",
      header : {"Content-Type" : "application/json"}
    };
/*
    fetch("http://localhost:8080/todo", requestOptions)
    .then(res => {
      console.log(res);
      return res.json();})
    // .then(res => res.json()) // 위랑 같은 의미 
    .then(
      data => { //HTTP Response  Status Code < 400
        this.setState({items : data})
      },
      error => { //HTTP Response  Status Code < 400
        this.setState({error :error})
        //items: [{id:0,title:"오류발생",done:false}]
      }
    )
*/
  }

  shouldComponentUpdate(nextProps,nextState,nextContext){
    console.log('App.shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('App.componentDidUpdate()');
    console.log(this.state);
    
  }

  componentWillUnmount(){
    console.log('App.componentWillUnmount()');
  }

  add = (item) => {

    call(App.API_BASE_PATH_TODO,"POST", item).then(data => {
      console.log('POST /todo >> ',data);
      this.setState({items : data});
    })
  }

  edit = (newItem) => {
    call(App.API_BASE_PATH_TODO,"PUT", newItem).then(data =>{
      console.log('PUT /todo >> ',data);
      this.setState({items : data});
    })
  }

  delete = (deletingItem) =>{
    call(App.API_BASE_PATH_TODO,"DELETE", deletingItem).then(data =>{
      console.log('DELETE /todo >> ',data);
      this.setState({items : data});
    })
  }

  render(){
    const items = this.state.items;
    console.log("render()", items);
/*
    // 사용하고 있지 않음
    let todos = [];
    for(let i = 0; i < items.length; i++){
      todos.push(<Todo item={items[i]}/>);
    }

    const todoList = items
    // .filter((item) => item.done)  
  // ES6 이전에 사용  
    //.map(function(item,idx){
    //  return <Todo item={item} key={item.id} />
    //});
  // ES6 에서 사용 -> 화살표 함수 (Arrow Function) 
    .map((item, idx) => <Todo item={item} key={item.id} />);
    
    // 1. Old Loop Style
    // let todos = [];
    // for (let i = 0; i < items.length; i++) {
    //   todos.push(<Todo item={items[i]} />);
    // }

    // const todoList = items
    //.filter((item) => item.done)
    // 2. Mordern Loop Style -> map() 사용
    // .map(function(item, idx) { // 익명 함수(Anonymous Function) 사용
    // 	return <Todo item={item} key={item.id} />;
    // });
    // 3. Mordern Loop Style + 화살표 함수(Arrow Function) -> ES6(ECMAScript 2015)
    // .map((item, idx) => <Todo item={item} key={idx} />);

*/
    const todoItems = items.map((item, idx) => (
      <Todo item={item} edit={this.edit} delete={this.delete} key={item.id} />
    ));

    return ( // JSX
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">
            <Paper style={{margin: 16}} elevation={10}>
              <List>
                {todoItems}
              </List>
            </Paper>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
