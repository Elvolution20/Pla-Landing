import { useEffect } from 'react'
import Root from './Components/Root';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import splitbee from '@splitbee/web';



function App() {
  useEffect(() => {
    splitbee.init("Land")
  })
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Root />}></Route>

      </Routes>
    </Router>
  );
}


export default App;
