const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Movie = require('./models/movie');
const app = express();

app.use(cors());
app.use(express.json());

const dbUrl = '';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
``
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/movies', async (req, res) => {
  const { key2 } = req.body;
  const newMovie = {
    name: key2
  };
  try {
    await Movie.create(newMovie);
    console.log('Movie added successfully.');
    res.status(201).json({ message: 'Movie added successfully.' });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to Port ${port}`));




      
