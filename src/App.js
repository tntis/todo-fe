import './App.css';
import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import {Paper, List, Container} from '@mui/material';

// npm -> Node Package eXension
// jsx -> JavaScript eXenstion

// 절차지향 개발 -> 객체지향 개발 -> 함수형 개발(Functional Programing)
// ES6+ (ECMAScript 2015+) 

// SPA -> Single Page Application
// SPA -> React(View), Vue.js(view), AngularJS
// CRA -> Create React App

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items : [
        {id : 1,title : "자바 공부하기", done : true},
        {id : 2,title : "스프링 공부하기", done : false},
        {id : 3,title : "스프링 공부하기2", done : false},
      ]
    }
  }

  componentDidMount(){
    console.log('App.componentDidMount()')
  }

  shouldComponentUpdate(nextProps,nextState,nextContext){
    console.log('App.shouldComponentUpdate()');
    console.info(nextState);
    return true;
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('App.componentDidUpdate()');
    console.info(prevState);
  }

  componentWillUnmount(){
    console.log('App.componentWillUnmount()');
  }

  add = (item) => {
    const thisItems = this.state.items;
    const newItem = {
      id: thisItems.length + 1,
      title: item.title,
      done: false
    }
    thisItems.push(newItem);
    this.setState({items: thisItems});
    console.log(thisItems);
  }

  edit = (newItem) => {
    const thisItems = this.state.items;
    /*
    // Legacy Style
    for(let i = 0; i< thisItems.length; i++){
      if(thisItems[i].id === newItem.id){
        thisItems[i].title = newItem.title;
        thisItems[i].done = newItem.done;
      }
    }
    */
    thisItems.filter(item => item.id === newItem.id)
      .forEach(item =>{
        item.title = newItem.title;
        item.done = newItem.done;
      });
    this.setState({items : thisItems});
    console.log(this.state.items);

  }

  delete = (deletingItem) =>{
    const thisItems = this.state.items;
    console.log('dd : ',deletingItem);
    console.log('oldItems : ', thisItems);
    const newItems =  thisItems.filter(item => item.id !== deletingItem.id);
    console.log('newItems : ', newItems);
    this.setState({items:newItems}, () =>{
      console.log('curItems ',this.state.items);
    });
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
    return ( // JSX
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">
            <Paper style={{margin: 16}} elevation={10}>
              <List>
                {items.map((item, idx) => (
                  <Todo item={item} edit={this.edit} delete={this.delete}  key={idx} />
                ))}
              </List>
            </Paper>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
