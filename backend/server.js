require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const { sequelize } = require('./models');

const app = express();

// enable CORS (adjust origin in production)
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());

// Auth endpoints
app.use('/api/auth', require('./src/routes/auth'));

// Contact “Get Started” endpoint
app.use('/api/contact', require('./src/routes/contact'));

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => console.log('✅ Postgres connected'))
  .then(() => sequelize.sync())
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server up on port ${PORT}`));
  })
  .catch(err => console.error('DB failed:', err));
