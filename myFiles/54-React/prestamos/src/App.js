import Header from './components/Header';
import Form from './components/Form';
import React, { useState } from 'react';

export default function App() {
	const [amount, setAmount] = useState(0);
	return (
		<>
			<Header title='Cotizador de Prestamos' />
			<Form amount={amount} setAmount={setAmount} />
		</>
	);
}
