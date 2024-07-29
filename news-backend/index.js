const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Make sure to include dotenv

const app = express();
const PORT = process.env.PORT || 5001;
const API_KEY = process.env.REACT_APP_NEWS_API; // Update this line
 // Use your API key from .env

// Use CORS middleware and specify the allowed origin
app.use(cors({
    origin: 'https://news-daily-m8q6.vercel.app', // Allow requests from your React app
}));
app.options('*', cors()); // Enable preflight for all routes
app.use((req, res, next) => {
    console.log(`Received request from ${req.get('origin')}`);
    next();
});

app.get('/api/news', async (req, res) => {
    console.log(API_KEY);
    const { searchQuery, country = 'in', category = 'business', page = 1, pageSize = 20 } = req.query;

    let url;
    if (searchQuery) {
        url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
    } else {
        url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;
    }

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
