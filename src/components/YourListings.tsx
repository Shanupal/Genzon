import { Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { dummyProducts } from '../products';

const YourListings = () => {
  return (
    <div>
      <Typography variant="h4" className="mb-6">Your Listed Products</Typography>
      <Grid container spacing={4}>
        {dummyProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default YourListings;