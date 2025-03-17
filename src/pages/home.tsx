import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, CardMedia, Button, Divider, TextField, InputAdornment, SearchIcon} from "@mui/material";
import { Search, ChatBubbleOutline } from "@mui/icons-material";
import  BestBooksCard  from "./../components/bestBooksCard.tsx"
import BooksCard from "./../components/booksCard.tsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagem from "../assets/bookImage.png"
const books = [
  { id: 1, title: "É assim que acaba", image: Imagem },
  { id: 2, title: "É assim que acaba", image: "./bookImage.png" },
  { id: 3, title: "É assim que acaba", image: "./bookImage.png" }
];

export default function Home() {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 1, 
  };

  return (
    <Box sx={{ backgroundColor: "#F8F2E9", minHeight: "100vh", textAlign: "center" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#D9C4AE", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#4E3B2C", fontWeight: "bold" }}>
            📚 Biblioteca
          </Typography>
          <Box>
            <IconButton>
              <Search sx={{ color: "#4E3B2C" }} />
            </IconButton>
            <IconButton>
              <ChatBubbleOutline sx={{ color: "#4E3B2C" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Seção dos Livros do Mês */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4E3B2C" }}>
          Esse Mês
        </Typography>
        <Typography variant="body1" sx={{ color: "#6E5843", mb: 4 }}>
          Conheça os melhores livros e os mais indicados do mês
        </Typography>

        <Grid container justifyContent="center" spacing={3}>
          {books.map((book) => (
            <Grid item key={book.id}>
              <Card sx={{ width: 150, backgroundColor: "transparent", boxShadow: "none" }}>
                <CardMedia component="img" image={book.image} alt={book.title} sx={{ borderRadius: 2 }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Botão de Navegação */}
      <Button
        sx={{
          mt: 4,
          color: "#4E3B2C",
          textTransform: "none",
          fontSize: "16px",
          "&:hover": { textDecoration: "underline" }
        }}
      >
        ⬇ Continue navegando
      </Button>
      <Box sx={{ backgroundColor: "#F8F2E9", minHeight: "100vh" }}>
          <Box sx={{ alignItems:"center", display:"flex" }}>
          <Typography color="#6C5F56" fontSize="15px" fontWeight="bold">Melhores Livros</Typography>
          <Divider sx={{ marginBottom: 2, backgroundColor: "#384D6D", borderRadious:"3" }} ></Divider>
          </Box> 
          {/* Carrossel de BestBooksCard */}
         <Slider {...settings}>
        {books.map((book) => (
          <BestBooksCard key={book.id} title={book.title} image={book.image} publisher="aaaaaaaaa" author={book.title}  />
        ))}
      </Slider>
      <Box sx={{ marginTop: 5}}>
      <TextField
          sx={{borderRadius: "100px", borderColor: '#E1D5C9'}}
          variant="outlined"
          fullWidth
          InputProps={{
          startAdornment: (
          <IconButton
            edge="start"
            sx={{
              backgroundColor: '#E1D5C9', 
              color: '#6C5F56',              
              borderRadius: '50%',         
              padding: '8px',             
          }}
        >
        <Search />
      </IconButton>
    ),
  }}
/>
    </Box>
      {/* Carrossel de BooksCard */}
      <Slider {...settings}>
        {books.map((book) => (
          <BooksCard key={book.id} title={book.title} image={book.image} publisher="aaaaaaaaa" author={book.title}  />
        ))}
      </Slider>  
      </Box>
    </Box>
  );
};


