import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, CircularProgress } from '@mui/material';
import UserProfile from './components/UserProfile';
import YourListings from './components/YourListings';
import ProductDetails from './components/ProductDetails';
import Layout from './components/Layout';

function App() {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <CircularProgress/>
    </div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <AppBar position="fixed">
          <Toolbar className="bg-blue-800">
            <Typography variant="h6" className="flex-grow">
              GenZon
            </Typography>
            {isAuthenticated && (
              <Button color="inherit" onClick={() => logout()}>
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
        
        {/* Main content wrapper */}
        <div className="flex">
          {/* Sidebar will be rendered by Layout component */}
          
          {/* Main content area */}
          <div className="flex-1 ml-60"> {/* ml-60 matches drawer width */}
            <div className="pt-16 px-6"> {/* Padding for AppBar and content */}
              {/* {isAuthenticated && (
                <Typography 
                  variant="h4" 
                  className="text-center mb-6 max-w-full truncate px-4"
                >
                  Welcome to GenZon, {user?.name}
                </Typography>
              )} */}
              
              <Layout>
                <Routes>
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/listings" element={<YourListings />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/" element={<Navigate to="/profile" />} />
                </Routes>
              </Layout>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
