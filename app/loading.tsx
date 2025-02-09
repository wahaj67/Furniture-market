const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <p className="ml-4 text-lg font-semibold">Loading products...</p>
      </div>
    );
  };
  
  export default Loading;
  