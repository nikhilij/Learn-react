function Item({ item, deleteItems, onToggle }) {
    return (
        <>
            <li>
                <span style={{ textDecoration: item.packed ? `line-through` : "" }}>
                    <input
                        type="checkbox"
                        checked={item.packed}
                        onChange={() => onToggle(item.id)}
                    />{" "}
                    {item.quantity} {item.description}
                    <button onClick={() => deleteItems(item.id)}>❌</button>
                </span>
            </li>
        </>
    );
}
export default Item;