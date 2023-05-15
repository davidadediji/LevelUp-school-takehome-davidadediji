import { Request, Response } from 'express';
import moment from 'moment';
export const paymentController = (req: Request, res: Response) => {

	
	res.status(201).json({ status: 'success', message: 'card details valid' });
};
