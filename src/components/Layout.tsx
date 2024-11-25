import { ReactNode } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Upload as UploadIcon, ViewList } from '@mui/icons-material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const drawerWidth = 240;

  const menuItems = [
    { text: 'List Products', icon: <UploadIcon />, path: '/profile' },
    { text: 'Your Listings', icon: <ViewList />, path: '/listings' },
  ];

  const drawer = (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          marginTop: '64px', // Height of AppBar
        },
      }}
      open={true}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgb(30, 64, 175)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgb(30, 64, 175)',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === item.path ? 'white' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <div className="flex">
      {drawer}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
