import React, { useState } from 'react';



function App() {
  const [units, setUnits] = useState("mm")

  const date = new Date()
  const month = date.toLocaleString('default', {month: 'long'})
  const beardLength = date.toLocaleString('default', {month: 'short'})

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Beard Length</h5>
          <p class="card-text">This month is {month}. Beard length is {beardLength} {units}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
