import React, { useState } from 'react';


const getPrice = (setPrice) => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(res => res.json())
        .then((data) => {
          setPrice(data.bpi.USD.rate)
        })
        .catch(console.log)

}

function App() {
  const [price, setPrice] = useState(0)

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bitcoin Price</h5>
        <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
        <button onClick={() => getPrice(setPrice)}>Refresh Price</button>
        <p class="card-text">${price}</p>
      </div>
    </div>
  )
}

export default App;
