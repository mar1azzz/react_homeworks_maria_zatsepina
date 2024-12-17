import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import HomePageSection from '../../components/HomePageSection/HomePageSection';

const HomePage = () => {
    return (
        <>
            <Header cartCount={0} />
            <HomePageSection />
            <Footer />
        </>
    );
};
export default HomePage;