function Stats({ items }) {
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some items to your packing list❤️‍🔥</em>
            </p>
        )

    const numitems = items.length
    const numPacked = items.filter((item) => item.packed).length;
    const percentAgepacked = Math.round((numPacked / numitems) * 100);
    return (
        <footer className="stats">
            {(percentAgepacked === 100) ?
                `You got everything ready to go!✈️`
                :
                <em>💼 You have {numitems} items on your list, and you already packed {numPacked} ({percentAgepacked ? percentAgepacked : 0}%)</em>
            }
        </footer>
    );
}

export default Stats;