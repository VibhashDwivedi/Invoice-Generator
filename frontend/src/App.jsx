import logo from './logo.svg';
import './App.css';
import Invoice from './components/Invoice';

function App() {
  return (
  <div className='container'>
    <div className="row">
      <div className="col-md-8">
      <Invoice />
      </div>
    </div>
   
  </div>
  );
}

export default App;
