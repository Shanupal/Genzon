import { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import FileManagement from './FileManagement';

const UserProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4"> {/* Added max-width and horizontal padding */}
      <div className="flex flex-col items-center">
        <Typography 
          variant="h4" 
          className="text-center mb-8 text-2xl font-semibold"
        >
          List Your Products
        </Typography>
        
        <div className="w-full flex justify-center mb-8">
          <Tabs 
            value={value} 
            onChange={handleChange}
            className="border-b border-gray-200"
          >
            <Tab 
              label="Bulk Import" 
              className="font-medium"
            />
            <Tab 
              label="Upload" 
              className="font-medium"
            />
          </Tabs>
        </div>
        <div className="w-full">
          <FileManagement activeTab={value}/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;