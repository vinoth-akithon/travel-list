export default function Stats({ packageItems }) {
  const totalItems = packageItems.length;

  if (!totalItems) {
    return (
      <div className="stats">
        Start adding some items to your packing list 🚀
      </div>
    );
  }

  const totalPackedItems = packageItems.reduce(
    (prev, item) => (item.isPacked ? prev + 1 : prev),
    0
  );
  const packagePersent = Math.round((totalPackedItems / totalItems) * 100);

  return (
    <div className="stats">
      {packagePersent === 100
        ? "You got everything! Ready to go ✈️"
        : `💼 You have ${totalItems} items on your list, and you already packed
        ${totalPackedItems} (${packagePersent}%)
        `}
    </div>
  );
}
