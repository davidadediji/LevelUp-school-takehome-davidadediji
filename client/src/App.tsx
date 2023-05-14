import { useState } from 'react';
import Input from './components/Input';
import CreditCard from './components/CreditCard';

interface ICardDetails {
	cardNumber: number;
	expirationDate: any;
	cvv: number;
}

function App() {
	const [cardDetails, setCardDetails] = useState<ICardDetails>({
		cardNumber: 0,
		expirationDate: null,
		cvv: 0,
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setCardDetails((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	return (
		<div className='main'>
			<p className='bg-text'>Payment Checkout</p>
			<div className='checkout'>
				<CreditCard />
				<div style={{paddingLeft:"20px"}}>
					<p className='small-text'>Enter your card details here.</p>
					<div className='card-input'>
						<Input
							label={'Card Number'}
							type='number'
							handleChange={handleChange}
							name='cardNumber'
						/>
						<Input
							label={'Expiration Date'}
							type='date'
							handleChange={handleChange}
							name='expirationDate'
						/>
						<Input
							label={'CVV'}
							type='number'
							handleChange={handleChange}
							name='cvv'
						/>
						<button
							className='btn'
							onClick={() => {
								console.log(cardDetails);
							}}
						>
							Confirm Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
