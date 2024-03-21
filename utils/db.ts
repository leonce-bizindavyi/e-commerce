import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const executeQuery = async (query: string, params:object) => {
    let connection;
    try {
      connection = await pool.getConnection();
      const [rows] = await connection.query(query, params);
      return rows;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'exécution de la requête :', error);
      
    } finally {
      if (connection) {
        connection.release(); // Libérer la connexion après l'exécution de la requête
      }
    }
  };
  
  export default executeQuery;