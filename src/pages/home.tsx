import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Grid,
  Card,
  CardMedia,
  Stack,
  Button,
  Drawer,
  InputBase,
  TextField,
} from "@mui/material";
import {
  Search,
  Chat,
  Send as SendIcon,
} from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BestBooksCard from "./../components/bestBooksCard.tsx";
import BooksCard from "./../components/booksCard.tsx";
import ListMessage from "../components/listMessage.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import home from "../assets/book-square.png";
import iconSearch from "../assets/search-normal.png";
import iconMensage from "../assets/messages.png";
import left from "../assets/left.png";

const key = import.meta.env.VITE_NY_API_KEY;
const urlBestSellers = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;

export default function Home() {
  const [books, setBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageChat, setMessageChat] = useState("");
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const handleAddMessage = async () => {
    const newMessage = {
      id: messages.length + 1,
      text: messageChat,
      sender: "You",
    };
    setMessages((prev) => [...prev, newMessage]);
    const question = messageChat;
    setMessageChat("");

    try {
      const response = await fetch("http://127.0.0.1:5000/ler-arquivo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ infos: question }),
        mode: "cors",
      });
      const data = await response.json();
      const botResponse = {
        id: messages.length + 2,
        text: data.resposta,
        sender: "robo",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Erro ao buscar mensagem:", error);
    }
  };

  const handleChangeMessage = (event) => {
    setMessageChat(event.target.value);
  };

  const handleClickDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const response = await fetch(urlBestSellers);
        const data = await response.json();
        const seen = new Set();
        const uniqueBooks = data.results.books.filter((b) => {
          if (seen.has(b.title)) return false;
          seen.add(b.title);
          return true;
        });
        const mappedBooks = uniqueBooks.map((b, idx) => ({
          id: idx + 1,
          title: b.title,
          image: b.book_image,
          author: b.author,
          publisher: b.publisher,
        }));
        setBooks(mappedBooks);
        setBestBooks(mappedBooks.slice(0, 5)); // Exibe os 5 primeiros na seção de destaque
      } catch (e) {
        console.error("Erro ao buscar best sellers:", e);
      }
    }
    fetchBestSellers();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBooks(books);
    } else {
      const lower = searchTerm.toLowerCase();
      const filtered = books.filter(
        (b) =>
          b.title.toLowerCase().includes(lower) ||
          b.author.toLowerCase().includes(lower)
      );
      setFilteredBooks(filtered);
    }
  }, [searchTerm, books]);

  return (
    <Box sx={{ backgroundColor: "#F8F2E9", minHeight: "100vh", width: "100%", textAlign:"center" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#D9C4AE", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton><img src={home} alt="home" /></IconButton>
            <Typography variant="h6" sx={{ color: "#4E3B2C", fontWeight: "bold" }}>
              Biblioteca
            </Typography>
          </Stack>
          <Box>
            <IconButton><img src={iconSearch} alt="search" /></IconButton>
            <IconButton onClick={handleClickDrawer}><img src={iconMensage} alt="mensagem" /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Chat */}
      <Drawer anchor="right" open={toggleDrawer} onClose={handleClickDrawer}>
        <Box sx={{ height: "63px", width: "432px", background: "#D9C4AE", display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleClickDrawer}><ArrowBackIosNewIcon /></IconButton>
          <Typography sx={{ fontSize: "25px", fontWeight: "bold", color: "#4E3B2C" }}>
            Robô
          </Typography>
        </Box>
        <Box sx={{
          backgroundImage: "linear-gradient(to bottom, #F9F8F6, #D9C4AE)",
          paddingTop: "63px",
          paddingBottom: "163px",
          overflow: "hidden",
          height: "800px",
          width: "432px"
        }}>
          <ListMessage messages={messages} />
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#D9C4AE",
          boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
          width: "412px"
        }}>
          <InputBase
            sx={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              marginRight: "10px",
              backgroundColor: "#f5f5f5",
            }}
            value={messageChat}
            onChange={handleChangeMessage}
          />
          <IconButton onClick={handleAddMessage} sx={{ backgroundColor: "#4E3B2C", color: "#fff", borderRadius: "50%" }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Drawer>

      {/* Lateral esquerda decorativa */}
      <Box component="img" src={left} alt="Prateleira esquerda" sx={{
        position: "absolute", left: 0, top: "40%", transform: "translateY(-50%)", height: "30vh"
      }} />

       {/* Seção dos Livros do Mês */}
       <Box sx={{ mt: 15, mb: 2, height: 550 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4E3B2C" }}>
          Esse Mês
        </Typography>
        <Typography variant="body1" sx={{ color: "#6E5843", mb: 4 }}>
          Conheça os melhores livros e os mais indicados do mês
        </Typography>
        <Grid
          container
          justifyContent="center"
          spacing={3}
          display="flex"
          flexDirection="row"
        >
          {bestBooks.slice(0, 3).map((book, index) => (
            <Grid item key={book.id}>
              <Card
                sx={{
                  width: index === 1 ? 200 : 180,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  paddingTop: index === 1 ? "0" : "70px",
                }}
              >
                <CardMedia
                  component="img"
                  image={book.image}
                  alt={book.title}
                  sx={{ borderRadius: 2 }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Melhores livros */}
      <Typography color="#6C5F56" fontSize="15px" fontWeight="bold">
        Melhores Livros
      </Typography>
      <Slider {...settings}>
        {books.map((book) => (
          <BestBooksCard key={book.id} title={book.title} image={book.image} author={book.author} publisher={book.publisher} />
        ))}
      </Slider>

      {/* Campo de pesquisa e botão de chat */}
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
                  marginRight: "2px"
                }}
              >
                <Search />
              </IconButton>
            ),
          }}
        />
        <Button variant="contained" 
        onClick={handleClickDrawer}
        sx={{
          backgroundColor: "#EF6465",
          color: "white",
          borderRadius: "20px",
          minWidth: "90px",
          marginTop: "20px"
        }} startIcon={<Chat />}>
          Chat
        </Button>
      </Box>

      {/* Lista de livros filtrados */}
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
