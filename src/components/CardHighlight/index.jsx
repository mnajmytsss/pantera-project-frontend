
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonS from '../Button-S';
import CustomTag from '../Tag';
import { CardActionArea, CardActions } from '@mui/material';
import './index.css';
import domba from '../../assets/domba.jpeg';

export default function MultiActionAreaCard() {
  return (
    <Card
      className="custom-card"
      sx={{ maxWidth: 345, borderRadius: '2px' }}
    >
      <CardActionArea sx={{ pointerEvents: 'none'}}>
        <CardMedia
          component="img"
          height="200"
          image={domba}
          alt="Domba"
          className="custom-card-media"
        />
        <CustomTag label="Program Snapshot" />
        <CardContent className='content'>
          <Typography variant="body2" color="text.secondary" className='typography'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica dsjfnsdjnfsdjkfnsdkjfhb sdn vsd fkvs dfvnsdfhjsdhf so dfvshdfbvkjshdfvksdfhv sdfhvbsdkfjhvs dfkhsdfuhsdfjhsdfnvsdf vbewubcsdv
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonS label="Read More" />
      </CardActions>
    </Card>
  );
}
