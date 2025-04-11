import React from "react";
import { Box, Typography } from "@mui/material";

type Message = {
  id: number;
  text: string;
  sender: string;
};

type ListMessageProps = {
  messages: Message[];
};

const ListMessage: React.FC<ListMessageProps> = ({ messages }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        gap: 2,
        p: 2,
        height: "calc(100vh - 170px)", 
        overflowY: "auto", 
        overflowX: "hidden",
        paddingBottom:"30px",
        width:"100%",        
      }}
    >
      {messages.map((message, index) => (
        <Box
            
          key={message.id || index}
          sx={{
            maxWidth: "80%",
            marginRight: "30px",
            alignSelf: message.sender === "You" ? "flex-end" : "flex-start",
            backgroundColor: message.sender === "You" ? "#e4d4ba" : "#F8F2E9",
            color: "#6E5843",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: 1,
            wordWrap: "break-word",
            
          }}
        >
          <Typography variant="body2">{message.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ListMessage;
