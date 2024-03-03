import {lazy, Suspense} from 'react'
import './App.css';
function App() {
  const Typehead = lazy(()=>import('./typehead/Typehead'))
  return (
    <div className="App">
      <Suspense fallback={<p>loading...</p>} >
        <Typehead/>
      </Suspense>
    </div>
  );
}

export default App;
