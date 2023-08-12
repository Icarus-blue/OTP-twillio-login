import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import myImage from '../assets/img/images.png';
import '../assets/css/style.css';
import React, { useState } from 'react';

export default function SignIn() {

    const [status, setStatus] = useState('otp');
    const [carNumber, setCarNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');

    const handleCarNumberSubmit = (e) => {
        e.preventDefault();
        console.log(carNumber);
    };

    const carNum = (event) => {
        setCarNumber(event.target.value)
    }


    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        // Perform validation or API call for phone number
        setStatus('otp');
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        // Perform validation or API call for OTP
        // Complete login process
    };

    const boardcolor = {
        backgroundColor: "#EBEBEB",
        paddingTop: "15px",
        paddingBottom: "50px"
    }
    console.log(status);
    return (
        <Container component="main" maxWidth="xs" style={boardcolor}>
            <div>
                {status === 'carNumber' && (
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ marginBottom: '20px' }}  >
                            Logga in
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '17px' }}>
                            Fyll i mobilenummer sa skickar vi en kod vis SMS
                        </Typography>

                        <Box component="form" onSubmit={handleCarNumberSubmit} noValidate sx={{ mt: 1 }} style={{ marginTop: "45px" }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Car Register No"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={carNum}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#9F9F9F', color: 'white', padding: '8px', }}
                                endIcon={<ArrowForwardIcon />}
                                style={{ fontSize: '17px ' }}
                            >
                                Sticka code
                            </Button>

                        </Box>
                        <Box style={{ marginTop: "40px" }}>
                            <img src={myImage} className="image-style" alt="Description of the image" />
                            <Typography variant="body1" component="p" sx={{ fontSize: '20px', padding: "40px  " }}>
                                Har du Fragor om service eller verkstad?
                            </Typography>
                        </Box>
                    </Box>
                )}
                {status === 'phoneNumber' && (
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ marginBottom: '20px' }}  >
                            Logga in
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '17px' }}>
                            Fyll i mobilenummer sa skickar vi en kod vis SMS
                        </Typography>

                        <Box component="form" onSubmit={handlePhoneNumberSubmit} noValidate sx={{ mt: 1 }} style={{ marginTop: "35px" }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="ABC 123"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#9F9F9F', color: 'white', padding: '8px', }}
                                endIcon={<ArrowForwardIcon />}
                                style={{ fontSize: '17px ' }}
                            >
                                Sticka kod
                            </Button>
                        </Box>
                        <Typography variant="body1" component="p" sx={{ fontSize: '18px', marginTop: '15px', color: '#5d5d5d' }}>
                            This is your phone Number
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '18px', color: "red" }}>
                            1543213215645642
                        </Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#12d867', color: 'white', padding: '8px', width: "330px" }}
                            style={{ fontSize: '17px ' }}
                        >
                            Confirm
                        </Button>
                        <Box style={{ marginTop: "15px" }}>
                            <img src={myImage} className="image-style" alt="Description of the image" />
                            <Typography variant="body1" component="p" sx={{ fontSize: '20px', padding: "20px  ", color: '#5d5d5d' }}>
                                Har du Fragor om service eller verkstad?
                            </Typography>
                        </Box>
                    </Box>
                )}
                {status === 'otp' && (
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ marginBottom: '20px' }}  >
                            Logga in
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '17px' }}>
                            Fyll i kod som skickates till
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: '17px', color: "red" }}>

                        </Typography>
                        <div className="container">
                            <input type="text" className="input-box" value={0} />
                            <input type="text" className="input-box" value={0} />
                            <input type="text" className="input-box" value={0} />
                            <input type="text" className="input-box" value={0} />
                            <input type="text" className="input-box" value={0} />
                            <input type="text" className="input-box" value={0} />
                        </div>
                        <Box component="form" onSubmit={handleOtpSubmit} noValidate sx={{ mt: 1 }} style={{ marginTop: "15px" }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#9f9f9f', color: 'white', padding: '8px', width: '300px' }}
                                style={{ fontSize: "17px", display: 'flex' }}
                            >
                                Logga in
                            </Button>
                            <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                                Visit Example.com
                            </Link>
                        </Box>
                        <Box style={{ marginTop: "40px" }}>
                            <img src={myImage} className="image-style" alt="Description of the image" />
                            <Typography variant="body1" component="p" sx={{ fontSize: '20px', padding: "20px  " }}>
                                Har du Fragor om service eller verkstad?
                            </Typography>
                        </Box>
                    </Box>
                )}
            </div>

        </Container>
    );
}