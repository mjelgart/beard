import React, { useState } from 'react';


const getPrice = (setPrice) => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(res => res.json())
        .then((data) => {
          setPrice(data.bpi.USD.rate)
        })
        .catch(console.log)

}

const getActivity = (setActivity) => {
  fetch('https://www.boredapi.com/api/activity')
  .then(res => res.json())
  .then((data) => {
    setActivity(data.activity)
  })
  .catch(console.log)
}

function App() {
  const [price, setPrice] = useState(0)
  const [activity, setActivity] = useState("Go Fishing")

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Bitcoin Price</h5>
          <button onClick={() => getPrice(setPrice)}>Refresh Price</button>
          <p class="card-text">${price}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Bored API</h5>
          <h6 class="card-subtitle mb-2 text-muted">Get an Idea for an Activity:</h6>
          <button onClick={() => getActivity(setActivity)}>New Idea</button>
          <p class="card-text">{activity}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
