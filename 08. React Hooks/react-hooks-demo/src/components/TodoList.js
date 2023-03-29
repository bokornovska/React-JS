import ListGroup from 'react-bootstrap/ListGroup';
import { TodoItem } from './TodoItem';
import Button from 'react-bootstrap/Button';


export const TodoList = ({
    todos,
    onTodoAddClick,
}) => {

    return (
        <div style={{ width: "50%", margin: '20px auto' }}>
            <h1 style={{color: "grey", textAlign: "center"}}>ToDo List</h1>
            <ListGroup >
            {todos.map(x => <TodoItem key={x._id} {...x}/>)}
            </ListGroup>

            <Button variant="secondary" style={{marginTop: "20px"}} onClick={onTodoAddClick} >Add Task</Button>{' '}

        </div>
    )
}