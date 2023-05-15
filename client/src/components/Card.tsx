import React from 'react';

export default function Card({ responseStatus, message }: { responseStatus: string; message:string}) {
	return (
		<>
			{responseStatus === 'success' ? (
				<div className='card-success'>
					<p className='small-text'>{message}</p>
					<div className='font-bold'>&#10005;</div>
				</div>
			) : (
				<div className='card-error'>
					<p className='small-text'>{message}</p>
					<div className='font-bold'>&#10005;</div>
				</div>
			)}
		</>
	);
}
