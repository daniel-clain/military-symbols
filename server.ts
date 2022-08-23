import * as express from 'express'

const app = express();

app.use(express.static('dist'));


const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


