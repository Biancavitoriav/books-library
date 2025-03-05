import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, CardMedia, Button } from "@mui/material";
import { Search, ChatBubbleOutline } from "@mui/icons-material";

const books = [
  { id: 1, title: "Compendium of Lost Tales", image: "/book-cover.jpg" },
  { id: 2, title: "Compendium of Lost Tales", image: "/book-cover.jpg" },
  { id: 3, title: "Compendium of Lost Tales", image: "/book-cover.jpg" }
];

export default function Home() {
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
    </Box>
  );
};


