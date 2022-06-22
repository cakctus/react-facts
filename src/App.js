import './App.css';

import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <div >
        <Header />
        <div className="App">
          <Content />
        </div>
        <Footer />
        
    </div>
  );
}

export default App;

