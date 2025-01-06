import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import MenuPage from './pages/MenuPage/MenuPage';
/*import HomePage from './pages/HomePage/HomePage';*/
/*import LogInPage from './pages/LogInPage/LogInPage';*/

const App = () => {
    
    return (
        <Provider store={store}>
           <MenuPage/>
        </Provider>
    );
};
export default App;
