import React, { useState } from 'react'
import MainCard from './component/MainCard'
import SubCard from './component/SubCard'

const App = () => {
  const [timeframe, setTimeframe] = useState('weekly');

  return (
      <div className="main-container">
          <MainCard setTimeframe={setTimeframe} />
          <SubCard timeframe={timeframe} />
      </div>
  );
};

export default App