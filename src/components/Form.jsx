import { useState } from "react";

export default function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = {
      itemName,
      quantity,
      isPacked: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setItemName("");
    setQuantity(1);
  }

  function handleItemOnChange(e) {
    setItemName(e.target.value);
  }

  function handleQuantityOnChange(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="desc">What do you need for your 😍 trip?</div>
      <input
        className="input"
        placeholder="Item..."
        type="text"
        name="itemName"
        value={itemName}
        onChange={handleItemOnChange}
      />
      <select
        onChange={handleQuantityOnChange}
        name="quantity"
        className="select"
        value={quantity}
      >
        {[...Array(20).keys()].map((item) => (
          <option key={item + 1} value={item + 1}>
            {item + 1}
          </option>
        ))}
      </select>
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  );
}
