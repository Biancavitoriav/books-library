import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

type BestBooksCardProps = {
  title: string;
  author: string;
  publisher: string;
  image: any;
};

const BooksCard: React.FC<BestBooksCardProps> = ({ title, author, publisher, image }) => {
  return (
    <Box>
        <Card sx={{ maxWidth: 130, padding: 2, maxHeight: 400, backgroundColor:"#F8F2E9",  borderRadius: 0, boxShadow: 0, }}>
              <CardMedia
                component="img"
                sx={{width:120}}
                image={image}
                alt={title}
              />
              <CardContent >
                <Typography fontSize="15px" variant="h1" fontWeight="bold" color="#6C5F56">
                  {title}
                </Typography>
                <Typography color="#6C5F56" fontSize="13px">
                  {author}
                </Typography>
              </CardContent>
            </Card>
    </Box>
  );
};

export default BooksCard;
