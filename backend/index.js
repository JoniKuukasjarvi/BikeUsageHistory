import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci'
  });
  
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

app.get('/', (req, res) => {
    res.json("Hello. This is the backend");
})

app.get("/biketrips", (req, res) => {
    const page = req.query.page || 1; 
    const limit = 10; 
    const offset = (page - 1) * limit; 
  
    const countQuery = "SELECT COUNT(*) AS total FROM biketrips"; 
    const dataQuery =
      "SELECT * FROM biketrips LIMIT ? OFFSET ?"; 
  
    db.query(countQuery, (err, countResult) => {
      if (err) {
        return res.json(err);
      }
  
      const totalRecords = countResult[0].total;
  
      db.query(dataQuery, [limit, offset], (err, data) => {
        if (err) {
          return res.json(err);
        }
  
        const totalPages = Math.ceil(totalRecords / limit);
  
        const response = {
          page: page,
          total_pages: totalPages,
          total_records: totalRecords,
          data: data,
        };
  
        return res.json(response);
      });
    });
  });


app.listen(8800, ()=> {
    console.log('Connected to backend')
})