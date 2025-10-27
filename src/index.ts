import express from 'express';
import Todo from './routes/todo';

const app = express();
const PORT = process.env.PORT ?? '3000';

app.get('/api/todo', Todo);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});

export default app;
