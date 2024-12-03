function ListGroup(){
    const items = ['New York','Tokyo','Delhi','Mumbai','Ahmedabad']
    return (
    <>
    <h1>List Group</h1>
    {items.length == 0 && <p>No Items Found</p> }
    <ul className="list-group">
        {items.map((item, index) => (

            <li key={index} className="list-group-item">{item}</li>
        ))}
    </ul>
    </>


    )
}

export default ListGroup;