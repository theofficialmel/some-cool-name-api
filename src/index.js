//Express sever

import express from "express";
const app = express();
app.use(express.json()); // JSON body parsing
const PORT = 3000;


// get/post methods 
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});