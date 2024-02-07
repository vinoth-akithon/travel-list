import { useState } from "react";
import PackingItem from "./PackingItem";

export default function PackingList({
  packageItems,
  onRemoveItem,
  onPackedStatus,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = packageItems;
  } else if (sortBy === "description") {
    sortedItems = packageItems
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  } else if (sortBy === "packed") {
    sortedItems = packageItems
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }

  function handleSetSortBy(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="packing-list-container">
      <div className="packing-list">
        {sortedItems.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onPackedStatus={onPackedStatus}
          />
        ))}
      </div>
      <div className="action">
        <select
          className="filter-item"
          value={sortBy}
          onChange={handleSetSortBy}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearItems} className="clear-btn">
          CLEAR LIST
        </button>
      </div>
    </div>
  );
}
