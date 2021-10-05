import { Card, Form } from "react-bootstrap";
import { BsFillTrashFill, BsCheckLg } from 'react-icons/bs';
import TodoListNotFound from "../TodoListNotFound/todoListNotFound";
import "./todolist.css";

const TodoList = (props) => {

    const handleMouseEnter = (index) => {
        props.MouseEnter(index)
    }

    const handleMouseLeave = (index) => {
        props.MouseLeave(index)
    }

    const handleChange = (index) => {
        props.MouseEnter(index)
        props.ChangeDoneTodoList(index)
    }

    const handleDeleteTodo = (index) => {
        props.MouseEnter(index + 1)
        props.deleteTodo(index)
    }

    return (
        <div className="mt-5">
            {props.dataTodoList.length > 0
                ?
                props.dataTodoList.map((items, index) => {
                    // const styleAnimate = {
                    //     animation: 'bounceInUp',
                    //     animationDuration: `${500 * index + 500}ms`
                    // }

                    return (
                        <Card
                            key={index}
                            className={`my-3 ${items.done ? 'animate__animated animate__flipInX' : ''}`}
                            // style={items.done ? {} : styleUnDone}
                            bg={items.done ? 'success' : 'light'}
                            text={items.done ? 'white' : 'dark'}
                            body
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            {!items.done && <Form.Check
                                inline
                                label={items.title}
                                name="group1"
                                type="checkbox"
                                id="inline-checkbox-1"
                                checked={items.done}
                                onChange={() => handleChange(index)}
                            />}

                            {items.done && <> <BsCheckLg onClick={() => handleChange(index)} /> {items.title} </>}

                            {
                                items.hover &&
                                <span className="d-inline-block float-end">
                                    <BsFillTrashFill style={{ cursor: 'pointer' }} onClick={() => handleDeleteTodo(index)} />
                                </span>
                            }
                        </Card>
                    );
                })
                : <TodoListNotFound />}
        </div >
    );
}

export default TodoList;
