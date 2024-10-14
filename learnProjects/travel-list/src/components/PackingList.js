import { useState } from "react";
import Item from "./Item";


function PackingList({ Items, deleteItems, onToggle, handleClear }) {


    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') sortedItems = Items;

    if (sortBy === 'description') sortedItems = Items.slice().sort((a, b) => a.description.localeCompare(b.description));


    if (sortBy === 'packed') sortedItems = Items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item item={item} key={item.id} deleteItems={deleteItems} onToggle={onToggle} />
                    ))}
                </ul>

                <div className="actions">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="input">Sort by input order</option>
                        <option value="description">Sort by description</option>
                        <option value="packed">Sort by packed</option>
                    </select>

                    <button onClick={handleClear}>Clear list</button>
                </div>
            </div>
        </>
    );
}

export default PackingList;