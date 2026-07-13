import SavedCard from "./SavedCard";

function SavedList({ items, onRemove }) {
  if (!items || items.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-12">
        You haven't saved any destinations yet.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {items.map((item) => (
        <SavedCard key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default SavedList;