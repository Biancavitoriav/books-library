import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

type BestBooksCardProps = {
  title: string;
  author: string;
  publisher: string;
  image: any;
};

const BestBooksCard: React.FC<BestBooksCardProps> = ({ title, author, publisher, image }) => {
  return (
    <Card sx={{backgroundColor: "#F8F2E9", height:"200px", display:"flex", justifyContent:"start", alignItems:"end", boxShadow:0}} >
      <CardMedia
        component="img"
        sx={{ top:"30px", position:"absolute", width:"100px"}}
        image={image}
        alt={title}
      />
      <Box sx={{backgroundColor: '#E1D6C9', borderRadius: 5, boxShadow: 3, maxWidth: 300, padding: 2, maxHeight: 90}}>
      <CardContent sx={{ marginLeft: 9 }}>
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
      </Box>
    </Card>
  );
};

export default BestBooksCard;
