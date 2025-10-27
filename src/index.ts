import express from 'express';

const app = express();
const PORT = process.env.PORT ?? '3000';

app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});

export default app;
