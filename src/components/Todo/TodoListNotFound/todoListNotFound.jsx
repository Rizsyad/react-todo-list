import { HiOutlineEmojiSad } from "react-icons/hi"
import { Card } from "react-bootstrap";
import "./todolistNotFound.css"

const TodoListNotFound = () => {
    return (
        <>
            <Card
                body
                bg="danger"
                text="white"
            ><HiOutlineEmojiSad /> Sorry, the to-do list has not been created yet</Card>
        </>
    );
}

export default TodoListNotFound;