import express from 'express';
import { _SERVICE, idlFactory } from './declarations/hello.did';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello world. Branch main');
});

app.get('/test', (req, res) => {
  res.send('Hello world. Branch main');
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET http://localhost:${PORT}/`);
  console.log(`  GET http://localhost:${PORT}/test`);

});
