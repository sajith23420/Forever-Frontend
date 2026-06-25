import react, {useState} from react;

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    function handleChange(event){
        setText(event.target.value);
    }

    function addTodo(){
        if(text === "") return;

        const newTodo = {
            id: Date.now(),
            title: text,
        };

        setTodos(todos.concat(newTodo));
        setText("");
    };


    function deleteTodo(id){
        const filtered = todos.filter(function(item){
            return item.id !== id;
        });
        setTodos(filtered);

    }

    return(
        <div>
            <h2>TODO List</h2>
            <input 
            type="text"
            value={text}
            onChange={handleChange} 
            placeholder="Enter todo item" />

            









        </div>



    )


}