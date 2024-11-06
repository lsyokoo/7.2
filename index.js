// Import the express library and assign it to a variable
import express from 'express';
import cors from 'cors'

// Create an instance of an express application 
const app = express();
app.use(express.json());

// Set the port the application will be running on
const port = process.env.PORT || 3001;

//cors
app.use(cors({
  origin: '*'
}));

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.json({ data: "Welcome to the Music Web Service" });
});

// Endpoint: /songs - Accepts genre and artist as query parameters
app.get('/songs', (req, res) => {
  const genre = req.query.genre;
  const artist = req.query.artist;

  // Check if genre or artist query parameter is provided
  if (genre || artist) {
    let responseMessage = "Songs available";
    if (genre) responseMessage += ` in genre: ${genre}`;
    if (artist) responseMessage += ` by artist: ${artist}`;
    res.json({ message: responseMessage });
  } else {
    res.json({ message: "Please provide a genre or artist query parameter to search for songs." });
  }
});

// Endpoint with Route Parameters: /songs/:genre/:artist
app.get('/songs/:genre/:artist', (req, res) => {
  const { genre, artist } = req.params;
  res.json({ message: `Songs available in genre: ${genre} by artist: ${artist}` });
});

// Handle
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found. Please check your URL." });
});

// Set the application to listen on a port
app.listen(port, () => {
  console.log(`Music Web Service listening on port ${port}`);
});
