import { Request, Response, NextFunction } from 'express';
import moment from 'moment';

export const validateCardDetails = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { cardNumber, cvv, expirationDate } = req.body;
	const formattedDate = moment(expirationDate, 'MM/YY').toDate();
	const currentDate = moment().toDate();

	const cardNumberNoSpaces = cardNumber.replaceAll(' ', '');
	// check expiration date
	if (formattedDate < currentDate) {
		return res
			.status(400)
			.json({ status: 'fail', message: 'date is in the past' });
	}
    // check for valid card number 
	if (cardNumberNoSpaces.length < 16 || cardNumberNoSpaces.length > 19) {
		return res
			.status(400)
			.json({ status: 'fail', message: 'card number is invalid' });
	}

    //checks for CVV
	const firstTwoCardNumbers = cardNumber.slice(0, 2);

	if (cvv.length < 3 || cvv.length > 4) {
		return res.status(400).json({ status: 'fail', message: 'cvv is invalid' });
	}

	if (
		cvv.length === 4 &&
		firstTwoCardNumbers !== '34' &&
		firstTwoCardNumbers !== '37'
	) {
		return res.status(400).json({
			status: 'fail',
			message: 'cvv invalid for a Non-American Express Card',
		});
	}

	if (
		cvv.length !== 4 &&
		(firstTwoCardNumbers === '34' || firstTwoCardNumbers === '37')
	) {
		return res.status(400).json({
			status: 'fail',
			message: 'cvv invalid for an American Express Card',
		});
	}

	next();
};
