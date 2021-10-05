import { useState } from "react";
import TodoCreate from "../TodoCreate/todoCreate";
import TodoList from "../TodoList/todolist";
import "./todos.css";

const Todos = () => {
    const [todo, setTodo] = useState([]);

    const hoverTodoList = (index) => {
        let newArr = [...todo]

        try {
            newArr[index]["hover"] = !newArr[index]["hover"]
            setTodo(newArr)
        } catch (err) {
            return;
        }
    }

    const doneTodoList = (index) => {
        let newArr = [...todo]
        newArr[index]["done"] = !newArr[index]["done"]
        setTodo(newArr)
    }

    const deleteTodo = (index) => {
        let newArr = [...todo]
        newArr.splice(index, 1)
        setTodo(newArr)
    }

    const addTodo = (todos) => {
        setTodo([...todo, todos])
    }

    return (
        <>
            {/* animate__fadeOut // buat hapusnya */}
            {/* animate__fadeInDown // buat createnya */}
            <h1 className="mb-3 text-center text-uppercase animate__animated animate__bounce">To-do List</h1>
            <TodoCreate addTodo={addTodo} />
            <TodoList
                dataTodoList={todo}
                MouseEnter={hoverTodoList}
                MouseLeave={hoverTodoList}
                ChangeDoneTodoList={doneTodoList}
                deleteTodo={deleteTodo}
            />
        </>
    );
}

export default Todos;