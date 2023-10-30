

const tableauNoms: string[] = ["Thomas", "Yoann", "Aly", "Jeremy"];

const List = () => {

    return (
        <div>
            <ul>
                {tableauNoms.map((name, i) => ( 
                    <li 
                        key={i}
                        className={i % 2 ? 'blueText' : ''}
                    >{name}</li> 
                ))}
            </ul>
        </div>
    );
}

export default List;