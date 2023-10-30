import { useCallback, useState } from 'react';

const Counter = () =>{
    const [compteur, setCompteur] = useState(0);

    const incrementeCompteur = useCallback(
        () => setCompteur(compteur + 1) ,[compteur]
    );

    return (
      <div>
       <h2>Counter : {compteur} </h2> 
       <button onClick={incrementeCompteur}>incrementer</button>
      </div>  
    );
}

export default Counter;