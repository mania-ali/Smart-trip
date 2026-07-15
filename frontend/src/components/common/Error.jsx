function Error({ message = "Something went wrong." }) {
  return (
    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
      <span className="text-lg">⚠️</span>
      <span>{message}</span>
    </div>
  );
}

export default Error;