import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import myImage from '../assets/img/images.png';
import '../assets/css/style.css';
import React, { useState, useEffect } from 'react';

export default function SignIn() {

    const [status, setStatus] = useState('carNumber');
    const [carNumber, setCarNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');

    const handleCarNumberSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/data/${carNumber}`)
                    .then(response => response.json())
                    .then(data => {
                        setPhoneNumber(data.obfuscatedPhoneNumber);

                    })
                    .catch(error => {
                        console.error(error);
                    });

                // const parameter = carNumber; // Replace with your parameter value
                // const url = `https://app-tiho-prod-api.azurewebsites.net/v1/authorization/search?regNo=${parameter}`;
                // const response = await fetch(url);
                // const jsonData = await response.json();
                // setPhoneNumber(jsonData.obfuscatedPhoneNumber);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()

    };

    const carNum = (event) => {
        setCarNumber(event.target.value)
    }

    useEffect(() => {
        if (phoneNumber) {
            setStatus('phoneNumber');
        } else if (otp) {
            setStatus('otp');
        } else {
            setStatus('carNumber');
        }
    }, [carNumber, phoneNumber, otp]);

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
    return (
        <Container component="main" maxWidth="xs" style={boardcolor}>
            <div>
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
                    <Box>
                        <Typography variant="body1" component="p" sx={{ fontSize: '20px', color: '#5d5d5d' }}>
                            Fyll i mobilenummer sa skickar vi en kod vis SMS
                        </Typography>
                        <Box component="form" onSubmit={handleCarNumberSubmit} noValidate sx={{ mt: 1 }} style={{ marginTop: "10px" }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Car Register No"
                                name="email"
                                value={carNumber}
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
                    </Box>

                    {status === 'phoneNumber' && (
                        <Box>
                            <Typography variant="body1" component="p" sx={{ fontSize: '18px', marginTop: '15px', color: '#5d5d5d' }}>
                                This is your phone Number
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ fontSize: '18px', color: "red" }}>
                                {phoneNumber}
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
                        </Box>

                    )}
                    {status === 'otp' && (
                        <Box>
                            <Typography variant="body1" component="p" sx={{ fontSize: '17px' }}>
                                Fyll i kod som skickates till
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ fontSize: '17px', color: "red" }}>

                            </Typography>
                        </Box>
                    )}

                    <Box style={{ marginTop: "40px" }}>
                        <img src={myImage} className="image-style" alt="Description of the image" />
                        <Typography variant="body1" component="p" sx={{ fontSize: '20px', padding: "40px  " }}>
                            Har du Fragor om service eller verkstad?
                        </Typography>
                    </Box>
                </Box>


            </div>

        </Container>
    );
}