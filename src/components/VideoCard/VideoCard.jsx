import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./VideoCard.module.css";
import { useNavigate } from "react-router-dom";

export default function VideoCard() {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/lesson");
  };

  return (
    <Card
      className={`${styles.container} ${styles.locked}`}
      onClick={handleCardClick}
    >
      <CardMedia
        className={`${styles.thumbnail}`}
        image="/lesson_thumbnail.png"
        title="lesson thumbnail"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Drill 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil
          itaque culpa alias quisquam voluptate voluptatum quam rerum
          distinctio. Quae id officiis fugit ut. Officiis perferendis adipisci
          cupiditate beatae perspiciatis.
        </Typography>
      </CardContent>
    </Card>
  );
}
