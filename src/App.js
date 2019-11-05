import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HotelsComponent from './Component/HotelsPage/HotelsComponent';


function App() {
  return (
    <BrowserRouter>
    <Route path='/hotels' render={() => <HotelsComponent/>} />
    
    </BrowserRouter>
    
  );
}

export default App;
