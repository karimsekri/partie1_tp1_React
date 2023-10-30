import React, { useState, useMemo, useCallback } from "react";


const NameForm = () => {
    const [textInput, setTextInput] = useState('');
    const [colorInput, setColorInput] = useState('');

    const copieTexteEvent = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) =>
        {   
            setTextInput(e.target.value)
           
        },[]
    )
    
    const getColorEvent = useCallback(
        (e:React.ChangeEvent<HTMLInputElement>) =>
        {   
            setColorInput(e.target.value)
           
        },[]
    )
    
    const upperCaseText = useMemo(
        () => textInput.toUpperCase(),[textInput]
    )
    
    return(
        <div>
            <label htmlFor="">Nom</label>
            <input type="text" name="inputText" id="inputTextId" onChange={copieTexteEvent} />
            <input type="color" name="colorInput" id="colorInput" onChange={getColorEvent} />
            <p>{upperCaseText}</p>
            <p>{colorInput}</p>
        </div>
    );

}
export default NameForm;