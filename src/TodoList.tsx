import React, { useState, useMemo, useCallback } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [nouvelleTodo, setNouvelleTodo] = useState('');

    const handleChangeTodo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNouvelleTodo(e.target.value)
    }, [])

    const ajouterTache = useCallback(
        () => {
            setTodos([...todos, nouvelleTodo])
            setNouvelleTodo('')
        },
        [todos, nouvelleTodo]    
    ); 

    return (
        <div>
            <div>
                <input type="text" name="tacheName" id="tacheId" value={nouvelleTodo} onChange={handleChangeTodo} />
                <button type="button" onClick={ajouterTache}>Ajouter Tache</button>
            </div>
            <div>
                <label htmlFor="">{todos.} </label>
            </div>
        </div>

    );
}

export default TodoList;