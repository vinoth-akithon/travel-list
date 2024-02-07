import { useState } from "react";
import Stats from "./components/stats";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

function App() {
  const [packageItems, setPackageItems] = useState([]);

  function handleAddItem(newItem) {
    setPackageItems((packageItems) => [...packageItems, newItem]);
  }

  function handleRemoveItem(itemId) {
    setPackageItems((packageItems) =>
      packageItems.filter((item) => item.id !== itemId)
    );
  }

  function handlePackedStatus(itemId) {
    setPackageItems((packageItems) =>
      packageItems.map((item) =>
        item.id === itemId ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  function handleClearItems() {
    if (
      packageItems.length &&
      window.confirm("Are you sure you want to delete all items?")
    ) {
      setPackageItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        packageItems={packageItems}
        onRemoveItem={handleRemoveItem}
        onPackedStatus={handlePackedStatus}
        onClearItems={handleClearItems}
      />
      <Stats packageItems={packageItems} />
    </div>
  );
}

export default App;
