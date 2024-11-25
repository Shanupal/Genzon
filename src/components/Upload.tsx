import React from 'react';

const Upload = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Selected files:", files);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6">Add Image or Video</h2>
      <div className="w-full max-w-md">
        <input 
          type="file" 
          accept="image/jpeg,image/png,video/*" 
          multiple 
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};


export default Upload;