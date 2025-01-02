require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// mongodb+srv://admin:password@123@cluster0.kn0oq.mongodb.net/
const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


const newsLinkSchema = new mongoose.Schema({
  today: String,
  yesterday: String,
  dayBefore: String,
});
const NewsLink = mongoose.model('NewsLink', newsLinkSchema);


app.get('/api/links', async (req, res) => {
  const links = await NewsLink.findOne(); 
  res.json(links);
});

app.post('/api/links', async (req, res) => {
  const { today, yesterday, dayBefore } = req.body;
  let links = await NewsLink.findOne();
  if (links) {
    
    links.today = today;
    links.yesterday = yesterday;
    links.dayBefore = dayBefore;
  } else {
    
    links = new NewsLink({ today, yesterday, dayBefore });
  }
  await links.save();
  res.json({ message: 'Links updated successfully' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
