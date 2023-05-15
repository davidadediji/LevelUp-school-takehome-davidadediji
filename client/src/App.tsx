import { useState } from 'react';
import CreditCard from './components/CreditCard';
import Cleave from 'cleave.js/react';
import axios,{AxiosError} from 'axios';
import Card from './components/Card';

interface IResponseData{
	status:string
	message:string
}

function App() {
	const [cardNumber, setcardNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [cvv, setCvv] = useState('');
	const [response, setResponse] = useState<IResponseData>();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:3000/api/v1/pay', {
				cardNumber: cardNumber,
				expirationDate: expirationDate,
				cvv: cvv,
			});
			setResponse(response.data)
		} catch (error:any) {
			setResponse(error.response?.data)
		}
	};

	return (
		<div className='main'>
			<p className='bg-text'>Payment Checkout</p>
			<div className='checkout'>
				<CreditCard />
				{response && <Card message={response.message} responseStatus={response.status}/>}
				<div style={{ paddingLeft: '20px' }}>
					<p className='small-text'>Enter your card details here.</p>
					<div className='card-input'>
						<div>
							<p>Card Number</p>
							<Cleave
								className='card'
								placeholder='Card Number'
								options={{ creditCard: true, creditCardType:'amex' }}
								value={cardNumber}
								onChange={(e) => setcardNumber(e.target.value)}
							/>
						</div>
						<div>
							<p>Expiration Date</p>
							<Cleave
								className='card'
								placeholder='MM/YY'
								value={expirationDate}
								options={{ date: true, datePattern: ['m', 'y'] }}
								onChange={(e) => setExpirationDate(e.target.value)}
							/>
						</div>
						<div>
							<p>CVV</p>
							<Cleave
								className='card'
								placeholder='CVV'
								options={{ blocks: [4], numericOnly: true }}
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
							/>
						</div>

						<button className='btn' onClick={handleSubmit}>
							Confirm Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
