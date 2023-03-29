
import { Modal, Button, Form } from 'react-bootstrap';

import { useForm } from '../hooks/useForm';

export const AddTodoModal = ({
    show,
    onTodoAddSubmit,
    onTodoAddClose,
}) => {
    const { formValues, onChangeHandler, onSubmit} = useForm({todo: ''}, onTodoAddSubmit)

    return (
        <Modal show={show}>
            <Modal.Header closeButton onHide={onTodoAddClose}>
                <Modal.Title>Add ToDo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name="todo" value={formValues.name} onChange={onChangeHandler} placeholder="Enter todo here" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                    <Button variant="secondary" style={{ marginLeft: "20px" }} onClick={onTodoAddClose}>Close</Button>
                </Form>

            </Modal.Body>




        </Modal>
    )
}