import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, CardMedia, Button, Divider, TextField } from "@mui/material";
import { Search, ChatBubbleOutline, Chat, Tune } from "@mui/icons-material";
import BestBooksCard from "./../components/bestBooksCard.tsx";
import BooksCard from "./../components/booksCard.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const key = import.meta.env.VITE_NY_API_KEY;
console.log(key)
const urlBestSellers = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;

export default function Home() {
  const [books, setBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

 useEffect(() => {
  async function fetchBestSellers() {
    try {
      const response = await fetch(urlBestSellers);
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      const data = await response.json();

      const seenTitles = new Set();
      const uniqueBooks = data.results.books.filter((book) => {
        if (seenTitles.has(book.title)) return false;
        seenTitles.add(book.title);
        return true;
      });

      const fetchedBooks = uniqueBooks.map((book, index) => ({
        id: index + 1,
        title: book.title,
        image: book.book_image,
        author: book.author,
        publisher: book.publisher,
      }));

      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Erro ao buscar os best sellers:", error);
    }
  }

  fetchBestSellers();
}, []);


  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBooks(books);
    } else {
      const lowerTerm = searchTerm.toLowerCase();
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(lowerTerm) ||
        book.author.toLowerCase().includes(lowerTerm)
      );
      setFilteredBooks(filtered);
      console.log(filtered)
    }
  }, [searchTerm, books]);

  return (
    <Box sx={{ backgroundColor: "#F8F2E9" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#D9C4AE", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#4E3B2C", fontWeight: "bold" }}>📚 Biblioteca</Typography>
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
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4E3B2C" }}>Esse Mês</Typography>
        <Typography variant="body1" sx={{ color: "#6E5843", mb: 4 }}>
          Conheça os melhores livros e os mais indicados do mês
        </Typography>

        <Grid container justifyContent="center" spacing={3}>
          {bestBooks.map((book) => (
            <Grid item key={book.id}>
              <Card sx={{ width: 150, backgroundColor: "transparent", boxShadow: "none" }}>
                <CardMedia component="img" image={book.image} alt={book.title} sx={{ borderRadius: 2 }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Carrossel de BestBooksCard */}
      <Typography color="#6C5F56" fontSize="15px" fontWeight="bold">Melhores Livros</Typography>
      <Slider {...settings}>
        {books.map((book) => (
          <BestBooksCard key={book.id} title={book.title} image={book.image} author={book.author} publisher={book.publisher} />
        ))}
      </Slider>

      {/* Campo de pesquisa */}
      <Box display="flex" alignItems="center" gap={1} width="100%" marginTop="30px">
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          fullWidth
          placeholder="Pesquisar"
          sx={{
            borderRadius: "100px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "100px",
              "& fieldset": { borderColor: "#E1D5C9" },
              marginTop: "20px",
              paddingLeft: "8px",
            },
          }}
          InputProps={{
            startAdornment: (
              <IconButton
                edge="start"
                sx={{
                  backgroundColor: "#E1D5C9",
                  color: "#6C5F56",
                  borderRadius: "50%",
                  padding: "8px",
                  marginLeft: "8px",
                  marginRight:"2px"
                }}
              >
                <Search />
              </IconButton>
            ),
          }}
        />

        {/* Botões */}
        
        <Button variant="contained" sx={{ backgroundColor: "#EF6465", color: "white", borderRadius: "20px", minWidth: "90px", marginTop:"20px" }} startIcon={<Chat />}>
          Chat
        </Button>

      </Box>

      {/* Carrossel de BooksCard */}
      <Box sx={{ marginTop: "30px", px: 2 }}>
        <Slider {...settings}>
          {filteredBooks.map((book) => (
          <BooksCard key={book.id} {...book} />
            ))}
        </Slider>
      </Box>
    </Box>
  );
}
