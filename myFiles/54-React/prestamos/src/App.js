import React, { useState } from 'react';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Result from './components/Result.js';
import Message from './components/Message.js';
import Spinner from './components/Spinner.js';


function App() {
  // UseState
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  let component;

  if (loading) {
    component = <Spinner />
  }else if (total === 0) {
    component = <Message />;
  } else {
    component = <Result total={total} term={term} amount={amount}/>
  }

  return (
    <>
      <Header title="Cotizador de Prestamos" description="Utiliza el formulario y obten una cotizacion" />
      <div className="container">
        <Form amount={amount} setAmount={setAmount} term={term} setTerm={setTerm} setTotal={setTotal} setLoading={setLoading} />
        <div className="mensajes">
          { component }
        </div> 
      </div>
    </>
  );
}
export default App;
