import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import { supabase } from "./supabaseClient";
import Login from "./Login";

function App() {
  const [todo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setAuthenticated(!!session);
    });
  }, []);

  return (
    <div className="App">
      {authenticated ? (
        <div className="container">
          <h1>ToDo App</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Add ToDos..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div
              className="add"
              onClick={
                isUpdating
                  ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                  : () => addToDo(text, setText, setToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>

          <div className="list">
            {todo.map((item) => (
              <ToDo
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Login setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;
