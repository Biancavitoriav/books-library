<<<<<<< HEAD
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, CardMedia, Button, Divider, TextField } from "@mui/material";
import { Search, ChatBubbleOutline, Chat, Tune } from "@mui/icons-material";
import BestBooksCard from "./../components/bestBooksCard.tsx";
import BooksCard from "./../components/booksCard.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const key = import.meta.env.VITE_NY_API_KEY;
const urlBestSellers = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
=======
import {
  Search,
  ChatBubbleOutline,
  RingVolume,
  Height,
} from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import arrow from "../assets/Arrow 1.png";
import home from "../assets/book-square.png";
import SendIcon from "@mui/icons-material/Send";
import iconSearch from "../assets/search-normal.png"
import iconMensage from "../assets/messages.png"
import left from "../assets/left.png"
import right from "../assets/right.png"
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
  Divider,
  Drawer,
  Input,
  InputBase,
} from "@mui/material";
import BestBooksCard from "./../components/bestBooksCard.tsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from 'react'
import ListMessage from "../components/listMessage.tsx";
import bookImage from "../assets/bookImage.png"



const books = [
  { id: 1, title: "É assim que acaba", image: "../assets/bookImage.png" },
  { id: 2, title: "É assim que acaba", image: "./bookImage.png" },
  { id: 3, title: "É assim que acaba", image: "./bookImage.png" }
];
>>>>>>> 60951044d86e32ca43b023b4bc4573492e107174

export default function Home() {
  const [books, setBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const settings = {
    dots: true,
<<<<<<< HEAD
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
=======
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  type Message = {
    id: number;
    text: string;
    sender: string;
  };

  const [messages, setMessages] = useState<Message[]>([]);

  const [messageChat, setMessageChat] = useState("");

  const handleAddMessage = async () => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: messageChat,
      sender: "You",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    const question = messageChat;
    setMessageChat("");

    try {
      const response = await fetch("http://127.0.0.1:5000/ler-arquivo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          infos: question,
        }),
        mode: "cors",
      });
      const data = await response.json();

      const newMessage: Message = {
        id: messages.length + 1,
        text: data.resposta,
        sender: "robo",
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageChat("");
    } catch (error) {
      console.error("Erro ao buscar mensagem:", error);
    }
  };

  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageChat(event.target.value);
  };

  const handleClickDrawer = () => {
    setToggleDrawer(!toggleDrawer);
>>>>>>> 60951044d86e32ca43b023b4bc4573492e107174
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
<<<<<<< HEAD
    <Box sx={{ backgroundColor: "#F8F2E9" }}>
=======
    <Box
      sx={{
        backgroundColor: "#F8F2E9",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
      }}
    >
>>>>>>> 60951044d86e32ca43b023b4bc4573492e107174
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#D9C4AE", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
<<<<<<< HEAD
          <Typography variant="h6" sx={{ color: "#4E3B2C", fontWeight: "bold" }}>📚 Biblioteca</Typography>
=======
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <img src={home} alt="" />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ color: "#4E3B2C", fontWeight: "bold" }}
            >
              Biblioteca
            </Typography>
          </Stack>
>>>>>>> 60951044d86e32ca43b023b4bc4573492e107174
          <Box>
            <IconButton>
              <img src={iconSearch} />
            </IconButton>
            <IconButton onClick={handleClickDrawer}>
              <img src={iconMensage} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="img"
        src={left}
        alt="Prateleira esquerda"
        sx={{
          position: "absolute",
          left: 0,
          top: "40%",
          transform: "translateY(-50%)",
          height: "30vh",
        }}
      />
      <Drawer anchor="right" open={toggleDrawer} onClose={handleClickDrawer}>
        <Box
          sx={{
            height: "63px",
            width: "432px",
            background: "#D9C4AE",
            display: "flex",
            alignItems: "center",
            position: "fixed",
            top: "0",
            right: "0",
          }}
        >
          <IconButton onClick={handleClickDrawer}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography
            sx={{
              paddingTop: "5px",
              fontSize: "25px",
              fontWeight: "bold",
              color: "#4E3B2C",
            }}
          >
            Robô
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: "linear-gradient(to bottom, #F9F8F6, #D9C4AE)",
            paddingTop: "63px",
            paddingBottom: "163px",
            overflow: "hidden",
            height: "800px",
            width: "432px",
          }}
        >
          <ListMessage messages={messages} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "#D9C4AE",
            boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
            width: "412px",
          }}
        >
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
          <IconButton
            sx={{
              backgroundColor: "#4E3B2C",
              color: "#fff",
              borderRadius: "50%",
              padding: "8px",
            }}
            onClick={handleAddMessage}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Drawer>

      {/* Seção dos Livros do Mês */}
<<<<<<< HEAD
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4E3B2C" }}>Esse Mês</Typography>
=======
      <Box sx={{ mt: 25, mb: 4, height: 550 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4E3B2C" }}>
          Esse Mês
        </Typography>
>>>>>>> 60951044d86e32ca43b023b4bc4573492e107174
        <Typography variant="body1" sx={{ color: "#6E5843", mb: 4 }}>
          Conheça os melhores livros e os mais indicados do mês
        </Typography>

<<<<<<< HEAD
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
=======
        <Grid
          container
          justifyContent="center"
          spacing={3}
          display="flex"
          flexDirection="row"
        >
          <Card
            sx={{
              width: 180,
              backgroundColor: "transparent",
              boxShadow: "none",
              paddingTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              image={bookImage}
              alt="Assim que acaba"
              sx={{ borderRadius: 2 }}
            />
          </Card>

          <Card
            sx={{
              width: 200,
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              image={bookImage}
              alt="Assim que acaba"
              sx={{ borderRadius: 2 }}
            />
          </Card>

          <Card
            sx={{
              width: 180,
              backgroundColor: "transparent",
              boxShadow: "none",
              paddingTop: "20px",
            }}
          >
            <CardMedia
              component="img"
              image={bookImage}
              alt="Assim que acaba"
              sx={{ borderRadius: 2 }}
            />
          </Card>
        </Grid>
      </Box>

      <Box
        component="img"
        src={right}
        alt="Prateleira direita"
        sx={{
          position: "absolute",
          right: 0,
          top: "60%",
          transform: "translateY(-50%)",
          height: "40vh",
        }}
      />

      {/* Botão de Navegação */}
      <Box>
        <Typography color="#6C5F56">Continue navegando</Typography>
        <IconButton>
          <img src={arrow} alt="" />
        </IconButton>
      </Box>


      <Box sx={{ backgroundColor: "#F8F2E9", minHeight: "100vh", textAlign: "start" }}>
        <Box sx={{   alignItems: 'center' }}>
          <Typography color="#6C5F56" fontSize="15px" fontWeight="bold">Melhores Livros</Typography>
          <Divider sx={{ marginBottom: 2, backgroundColor: "#384D6D", borderRadious:"3" }} ></Divider>
        </Box>
 {/* Carrossel de BestBooksCard */}
 <Slider {...settings}>
        {books.map((book) => (
          <BestBooksCard key={book.id} title={book.title} image={book.image} publisher="aaaaaaaaa" author={book.title}  />
        ))}
      </Slider>      </Box>
      <img src="bookImage.png" alt="book image"/>
>>>>>>> 60951044d86e32ca43b023b4bc4573492e107174
    </Box>
  );
}
