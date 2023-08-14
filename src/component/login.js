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
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const [status, setStatus] = useState('carNumber');
    const [carNumber, setCarNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [encryptedPhoneNumber, setencryptedPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [digits, setDigits] = useState(['', '', '', '', '', '']);
    const [mergedString, setMergedString] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [otperrorMessage, setOtpErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleCarNumberSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            const timeoutDuration = 5000; // 5 seconds
            const controller = new AbortController();
            const timeoutId = setTimeout(() => {
                controller.abort(); // Abort the request if the timeout is reached
                // Handle timeout error
            }, timeoutDuration);
            try {
                const response = await fetch(`http://localhost:3001/api/data/${carNumber}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data.staus === 0) {
                            setPhoneNumber(data.res.obfuscatedPhoneNumber);
                            setencryptedPhoneNumber(data.res.encryptedPhoneNumber);
                            setStatus('phoneNumber');
                            clearTimeout(timeoutId);
                        } else {
                            setErrorMessage('Please input correct Car Number');
                            setTimeout(() => {
                                setErrorMessage('');
                            }, 2000);
                        }

                    })
                    .catch(error => {
                    });
                // Please use this code on your side|||||||||||||||||||||||||||||||||||||
                // const parameter = carNumber; // Replace with your parameter value
                // const url = `https://app-tiho-prod-api.azurewebsites.net/v1/authorization/search?regNo=${parameter}`;
                // const response = await fetch(url);
                // const jsonData = await response.json();
                // if (jsonData.status === 0) {
                //     setPhoneNumber(jsonData.obfuscatedPhoneNumber);
                //     setencryptedPhoneNumber(jsonData.encryptedPhoneNumber);
                //     setStatus('phoneNumber');
                //     clearTimeout(timeoutId);
                // } else {
                //     setErrorMessage('Please input correct Car Number');
                //     setTimeout(() => {
                //         setErrorMessage('');
                //     }, 2000);
                // }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()

    };

    const carNum = (event) => {
        setCarNumber(event.target.value)
    }

    const handleInputChange = (index, value) => {
        // Remove any non-digit characters from the input
        const cleanedValue = value.replace(/\D/g, '');

        // Limit the input to a single digit
        const singleDigitValue = cleanedValue.slice(0, 1);
        const updatedDigits = [...digits];
        updatedDigits[index] = singleDigitValue;
        setDigits(updatedDigits);
        const merged = updatedDigits.join('');
        setMergedString(merged);
    };

    const handlePhoneNumberSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/phone/${encryptedPhoneNumber}`)
                    .then(response => response.json())
                    .then(data => {
                        setOtp(data.authorizationToken);
                        setStatus('otp');
                    })
                    .catch(error => {
                        console.error(error);
                    });

                // const parameter = encryptedPhoneNumber; // Replace with your parameter value
                // const url = `https://app-tiho-prod-api.azurewebsites.net/v1/authorization/login?encryptedPhoneNumber=${parameter}`;
                // const response = await fetch(url);
                // const jsonData = await response.json();
                // setOtp(jsonData.authorizationToken);
                // setStatus('otp');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/otp/${mergedString}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.staus === 0) {
                            navigate('/home');
                        } else {
                            setErrorMessage('Please input correct OTP');
                            setTimeout(() => {
                                setErrorMessage('');
                            }, 2000);
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });

                // const parameter = mergedString; // Replace with your parameter value
                // const url = `https://app-tiho-prod-api.azurewebsites.net/v1/authorization/validate?authToken=${parameter}`;
                // const response = await fetch(url);
                // const jsonData = await response.json();
                // if (jsonData.staus === 0) {
                //     navigate('/home');
                //     setOtp(jsonData.authorizationToken);
                // } else {
                //     setErrorMessage('Please input correct OTP');
                //     setTimeout(() => {
                //         setErrorMessage('');
                //     }, 2000);
                // }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    };

    const handlePaste = (event) => {
        event.preventDefault();
        const pastedValue = event.clipboardData.getData('Text');
        const pastedDigits = pastedValue.split('').slice(0, 6);

        const updatedDigits = [...digits];
        updatedDigits.forEach((digit, index) => {
            if (index < pastedDigits.length) {
                updatedDigits[index] = pastedDigits[index];
            }
        });
        setDigits(updatedDigits);
        const merged = updatedDigits.join('');
        setMergedString(merged);
    };

    const changePhonenum = () => {
        setStatus("carNumber");
        setCarNumber("");
    }

    const boardcolor = {
        backgroundColor: "#EBEBEB",
        paddingTop: "5px",
        paddingBottom: "30px",
    }
    const linkStyles = {
        textDecoration: 'none',
        fontSize: "20px",
        color: "#3cc269"
    };
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
                        {(status === 'phoneNumber' || status === 'carNumber') && (
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
                                        sx={{
                                            '& .MuiFormHelperText-root': {
                                                color: 'red',
                                            },
                                        }}
                                        helperText={errorMessage || ' '}

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

                        )}
                        {status === 'otp' && (
                            <Box>
                                <Typography variant="body1" component="p" sx={{ fontSize: '20px', color: '#5d5d5d' }}>
                                    Fyll i kod som skickates till
                                </Typography>
                                <Typography variant="body1" component="p" sx={{ fontSize: '18px', color: "red" }}>
                                    {phoneNumber}
                                </Typography>
                                <div className="container">
                                    {digits.map((value, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            value={value}
                                            className="input-box"
                                            onChange={(event) => handleInputChange(index, event.target.value)}
                                            onPaste={handlePaste}

                                        />
                                    ))}
                                </div>
                                {otperrorMessage && <p>{otperrorMessage}</p>}
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
                                    <Link target="_blank" rel="noopener noreferrer" onClick={changePhonenum} style={linkStyles}>
                                        Ändra telefonummer
                                    </Link>
                                </Box>
                            </Box>
                        )}
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
                                onClick={handlePhoneNumberSubmit}
                            >
                                Confirm
                            </Button>
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