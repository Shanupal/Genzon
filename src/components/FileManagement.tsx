import React from 'react';
import BulkImport from './BulkImport';
import Upload from './Upload';

interface FileManagementProps {
  activeTab: number;
}

const FileManagement: React.FC<FileManagementProps> = ({ activeTab }) => {
    return (
      <div className="w-full flex justify-center">
        <div className="border-2 border-blue-500 p-6 rounded-lg w-full max-w-2xl shadow-sm">
          {activeTab === 0 && <BulkImport />}
          {activeTab === 1 && <Upload />}
        </div>
      </div>
    );
};

export default FileManagement;