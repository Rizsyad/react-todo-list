import { useState } from "react";
import { MdAdd, MdOutlineWarning } from "react-icons/md";
import "./todoCreate.css";

const TodoCreate = (props) => {
    const [todo, setTodo] = useState("")
    const [isError, setIsError] = useState(false)

    const handleChangeInput = (e) => {
        setTodo(e.target.value)
    }

    const toggleError = () => {
        setIsError(!isError)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todo.trim() === "") {
            if (isError) return;

            toggleError()
            return;
        }

        if (isError) toggleError();

        const newTodo = {
            title: todo,
            hover: false,
            done: false
        }

        props.addTodo(newTodo)

        setTodo("")
    }

    return (
        <div className="animate__animated animate__zoomInDown">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" value={todo} className="form-control" placeholder="Add Todo" aria-label="Recipient's username" aria-describedby="button-addon" onChange={handleChangeInput} />
                    <button className="btn btn-danger" type="submit" id="button-addon"><MdAdd /></button>
                </div>
            </form>
            {isError && <div className="text-center text-danger animate__animated animate__bounceIn">
                <MdOutlineWarning /> Oops! Please, enter name to-do
            </div>}
        </div>
    );
}

export default TodoCreate;