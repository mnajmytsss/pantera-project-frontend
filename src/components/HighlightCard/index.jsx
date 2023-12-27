/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonS from '../Button-S';
import CustomTag from '../Tag';
import { CardActionArea, CardActions } from '@mui/material';
import './HighlightCard.css';

export default function MultiActionAreaCard({ title, description, image, customTagLabel }) {
  return (
    <Card
      className="custom-card"
      sx={{ maxWidth: 345, borderRadius: '2px' }}
    >
      <CardActionArea sx={{ pointerEvents: 'none'}}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          className="custom-card-media"
        />
        <CustomTag label={customTagLabel} />
        <CardContent className='content'>
          <Typography variant="body2" color="text.secondary" className='typography'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonS label="Read More" />
      </CardActions>
    </Card>
  );
}
