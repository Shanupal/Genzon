import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  RadioGroup,
  FormControlLabel,
  Radio,
  Box
} from '@mui/material';
import { dummyProducts } from '../products';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = dummyProducts.find(p => p.id === id);
  const [shippingType, setShippingType] = useState(product?.shippingType || 'self');

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent>
        <Button onClick={() => navigate('/listings')} className="mb-4">
          Back to Listings
        </Button>
        
        <div className="h-64 bg-gray-200 mb-4 rounded-md"></div>
        
        <Typography variant="h4" className="mb-4">
          {product.name}
        </Typography>
        
        <Typography variant="body1" className="mb-4">
          {product.description}
        </Typography>
        
        <Typography variant="h6" color="primary" className="mb-4">
          ${product.price.toFixed(2)}
        </Typography>
        
        <Typography variant="subtitle1" className="mb-4">
          Category: {product.category}
        </Typography>
        
        <Box className="mt-6">
          <Typography variant="h6" className="mb-2">
            Shipping Preference
          </Typography>
          <RadioGroup
            value={shippingType}
            onChange={(e) => setShippingType(e.target.value)}
          >
            <FormControlLabel 
              value="self" 
              control={<Radio />} 
              label="I want to ship this product" 
            />
            <FormControlLabel 
              value="amazon" 
              control={<Radio />} 
              label="Amazon will ship this product" 
            />
          </RadioGroup>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;