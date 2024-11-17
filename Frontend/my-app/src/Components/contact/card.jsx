import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const StyledTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "#FFFFFF", // Label color
  },
  "& .MuiOutlinedInput-root": {
    color: "#FFFFFF", // Input text color
    "& fieldset": {
      borderColor: "#FFFFFF", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#3A93B3", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3A93B3", // Border color when focused
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#101630",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#3A93B3",
  },
});

function Card() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .send(
        "service_920olow",
        "template_62cywm7",
        formData,
        "ezWSm4a7zaeCImlAa" 
      )
      .then(
        (response) => {
          setFeedback("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setFeedback("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-[#559BD8] to-[#4A39C3] px-6 py-6 rounded-xl"
    >
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#101630] text-white mb-4"
        >
          <StyledTextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#101630] mb-4"
        >
          <StyledTextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#101630] mb-4"
        >
          <StyledTextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={3}
            variant="outlined"
            fullWidth
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-10"
        >
          <StyledButton type="submit" variant="contained" fullWidth>
            SEND
          </StyledButton>
        </motion.div>
      </form>
      {feedback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white mt-2 text-center"
        >
          {feedback}
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;





