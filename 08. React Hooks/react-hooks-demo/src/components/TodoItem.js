import {ListGroup, Button} from 'react-bootstrap';

import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({
    _id, 
    todo, 
    isCompleted,
}) => {

    const {onTodoDeleteClick, onTodoClick} = useContext(TodoContext);
    return (
        <ListGroup.Item action style={{display:'flex', justifyContent:'space-between'}} onClick={() => onTodoClick(_id)}>
            <p style={{textDecoration: isCompleted ? "line-through" : 'none'}} >{todo}</p>
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    )
}