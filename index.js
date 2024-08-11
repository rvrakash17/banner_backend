const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const bannerRoutes = require('./routes/bannerRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/banner', bannerRoutes);

app.get('/', (req, res) => {
    res.json('Welcome to the Express App!');
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json('Something went wrong!');
  });
  
  const PORT=process.env.PORT ;
  app.listen(PORT,async()=>{
      try {
          await sequelize.authenticate();
          console.log(`listening port number ${PORT}`)
       
      } catch (error) {
          console.log('error while connecting to db', error.message)
      }
  })
  
  