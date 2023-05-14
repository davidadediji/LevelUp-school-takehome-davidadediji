import express from 'express';
import cors from 'cors';
import paymentRoute from "./src/router"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', paymentRoute)

app.listen(3000, 'localhost', () => {
	console.info(`server starting on port 3000`);
});
