import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuSection from './components/MenuSection/MenuSection';

class App extends Component {
    state = {
        cartCount: 0
    };

    addToCart = (quantity) => {
        this.setState((prevState) => ({
            cartCount: prevState.cartCount + quantity
        }));
    };

    render() {
        return (
            <>
                <Header cartCount={this.state.cartCount} />
                <MenuSection addToCart={this.addToCart} />
                <Footer />
            </>
        );
    }
}

export default App;
