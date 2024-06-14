import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
    "& .MuiInputLabel-root": {
        color: "#FFFFFF",
    },
});

const StyledButton = styled(Button)({
    backgroundColor: "#101630",
    color: "#FFFFFF",
    "&:hover": {
        backgroundColor: "#3A93B3", 
    },
});

function Card(){
    return (
        <div className="bg-gradient-to-r from-[#559BD8] to-[#4A39C3] px-6 py-6 rounded-xl">
            <div className="bg-[#101630] text-white mb-4">
            <StyledTextField label="Name" variant="outlined" fullWidth />
            </div>
            <div className="bg-[#101630] mb-4">
            <StyledTextField label="Email" type="email" variant="outlined" fullWidth />
            </div>
            <div className="bg-[#101630] mb-4">
            <StyledTextField label="Message" 
                multiline
                rows={3}
                variant="outlined" 
                fullWidth 
                />
            </div>
            <div className=" mb-10">
            <StyledButton type="submit" variant="contained" fullWidth>SEND</StyledButton>
            </div>
        </div>
    )
}

export default Card;