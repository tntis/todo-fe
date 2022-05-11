import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemButton, ListItemSecondaryAction, IconButton} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
// state -> 해당 컴포넌트 내의 상태 관리용 변수
// props -> 하위 컴포넌트로 데이터 전달용

// 객체지향 (vs. 함수형 컴포넌트)

class Todo extends React.Component
{
    constructor(props){
        super(props); // 생성자에서는 super 있어야함
        this.state = { item : props.item, readOnly : true};
        this.editTodo = props.edit;
        this.deleteTodo = props.delete;
    }

    onInputChange = e => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
        // console.log(thisItem);
      }
    
    onPressEnter = e => {
        if (e.key === 'Enter') {
            this.editTodo(this.state.item);
            this.setState({readOnly : true});
        }
    }

    onInputClick = () =>{
        this.setState({readOnly : false});
    }
    
    onCheckboxClick = e =>{
        const thisItem = this.state.item;
        thisItem.done = e.target.checked;
        this.setState({item :thisItem});
        this.editTodo(thisItem);
        /*
        const {editTodoItem, item} = this.state;
        item.done = e.target.checked
        this.setState({item:item})
        
        */
    }
    onDeleteButtonClick = () => {
        this.deleteTodo(this.state.item);
    }

    render() {
        //JSX -> 표준 JS (Babel -> 트랜스파일링)
        // Webpack -> 모듈 번들링 
        
        // const vs. let 의 차이 
        // ES5 :var 사용, 타입 변수 변경 가능
        // ES6 :let 변경가능 const변경 불가

       // const {myItem:item, readOnly} = this.state; // ES6,  구조 분해할당 문법

        const {item} = this.props;
        const {readOnly} = this.state;


        const htmlId = 'todo-' + item.id;

        return (// JSX -> JS + HTML
            <ListItem>
                <ListItemButton>
                    <Checkbox checked={item.done} onClick={this.onCheckboxClick} />
                    <ListItemText>
                    <InputBase
                        readOnly={readOnly}
                        onChange={this.onInputChange}
                        onKeyPress={this.onPressEnter}
                        onClick={this.onInputClick}
                        inputProps={{"arial-label": "naked"}}
                        type="text"
                        id={htmlId}
                        name={htmlId}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                    </ListItemText>

                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete Todo" onClick={this.onDeleteButtonClick}>
                            <DeleteOutlined />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItemButton>
            </ListItem>
        )
    }
}

export default Todo;