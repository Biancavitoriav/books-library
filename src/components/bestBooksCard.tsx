import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type BestBooksCardProps = {
  title: string;
  author: string;
  publisher: string;
  image: string;
};

const BestBooksCard: React.FC<BestBooksCardProps> = ({ title, author, publisher, image }) => {
  return (
    <Card sx={{ backgroundColor: '#E1D6C9', borderRadius: 5, boxShadow: 3, maxWidth: 300, padding: 2, maxHeight: 100 }}>
      <CardMedia
        component="img"
        sx={{ borderRadius: 2, boxShadow: 2, top:"20px", position:"relative", width:"50px"}}
        image={image}
        alt={title}
      />
      <CardContent sx={{ marginLeft: 2 }}>
        <Typography fontSize="20px" variant="h1" fontWeight="bold" color="#6C5F56">
          {title}
        </Typography>
        <Typography color="#6C5F56" fontSize="15px">
          {author}
          Colleen Hoover
        </Typography>
        <Typography color="#6C5F56" fontSize="10px">
            Publicado por Del Rey {publisher}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BestBooksCard;
