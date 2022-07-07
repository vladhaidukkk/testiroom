import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import path from 'path';

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.HEROKU) {
  const clientRootPath = path.resolve(__dirname, '../client/dist');
  const clientIndexPath = path.resolve(clientRootPath, 'index.html');

  app.use(express.static(clientRootPath));
  app.get('*', (req, res) => {
    res.sendFile(clientIndexPath);
  });
}

app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on PORT: ${chalk.bold(PORT)}`));
});
