export default function PackingItem({ item, onRemoveItem, onPackedStatus }) {
  const { isPacked, itemName, quantity } = item;
  return (
    <div className="item">
      <input
        className="item-checkox"
        type="checkbox"
        name="item"
        id=""
        checked={isPacked}
        onChange={() => onPackedStatus(item.id)}
      />
      <span className={`${isPacked && "strickout"}`}>
        {quantity} {itemName}
      </span>
      <button onClick={() => onRemoveItem(item.id)} className="cross-btn">
        &#x2716;
      </button>
    </div>
  );
}
