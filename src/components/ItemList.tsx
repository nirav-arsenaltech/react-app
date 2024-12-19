export function ItemList() {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    return (
        <div className="mt-4">
            <h2>Fruits List</h2>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item">{item}</li>
                ))}
            </ul>
        </div>
    );
}