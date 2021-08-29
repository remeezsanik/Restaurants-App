import "./App.css";
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RestaurantDetails from "./components/RestaurantDetails";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/restaurants/:id' component={RestaurantDetails} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
