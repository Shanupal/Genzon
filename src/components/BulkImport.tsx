import React from 'react';
const BulkImport = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6">Add PDFs or CSV File</h2>
      <div className="w-full max-w-md">
        <input 
          type="file" 
          accept=".pdf,.csv" 
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default BulkImport;