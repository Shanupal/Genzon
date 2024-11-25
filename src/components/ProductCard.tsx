import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Product } from '../products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="w-full max-w-sm hover:shadow-lg transition-shadow duration-200"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="div"
          className="h-48 bg-gray-200"
        />
        <CardContent>
          <Typography variant="h6" component="div" className="mb-2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-2">
            {product.description.substring(0, 100)}...
          </Typography>
          <Typography variant="h6" color="primary">
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" className="mt-2">
            Category: {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;