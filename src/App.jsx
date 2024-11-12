import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuSection from './components/MenuSection/MenuSection';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <MenuSection />
                <Footer />
            </>
        );
    }
}

export default App;
