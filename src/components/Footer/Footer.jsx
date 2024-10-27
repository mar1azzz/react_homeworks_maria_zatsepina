/* eslint-disable react/no-children-prop */
import ListSection from '../ListSection/ListSection';
import { Row } from '../Row/Row';
import logo from '../../assets/icons/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <img src="../../assets/images/footerbg.png" alt="" className="footer-bg" />
            <div className="footer-content">
                <Row>
                    <ListSection
                            title={<img src={logo} alt="Company Logo" />}
                            children={['Takeaway & Delivery template for small - medium businesses.']}
                            clickable={false}
                        />
                    <Row>
                        {/* Информационные столбцы */}
                        <ListSection
                            title="COMPANY"
                            children={[
                                { label: 'Home', url: '/home' },
                                { label: 'Order', url: '/order' },
                                { label: 'FAQ', url: '/faq' },
                                { label: 'Contact', url: '/contact' }
                            ]}
                            clickable={true}
                        />
                        <ListSection
                            title="TEMPLATE"
                            children={[
                                { label: 'Style Guide', url: '/style-guide' },
                                { label: 'Changelog', url: '/changelog' },
                                { label: 'Licence', url: '/licence' },
                                { label: 'Webflow University', url: 'https://university.webflow.com' }
                            ]}
                            clickable={true}
                        />
                        <ListSection
                            title="FLOWBASE"
                            children={[
                                { label: 'More Cloneables', url: '/cloneables' }
                            ]}
                            clickable={true}
                        />
                    </Row>
                </Row>
                {/* Разделитель */}
                <hr className="footer-divider" />
                {/* "Built by..." и иконки социальных сетей */}
                <Row>
                <Row>
                    <span className="footer-text">
                        Built by <a href="https://flowbase.co" className="footer-link">Flowbase</a> · Powered by <a href="https://webflow.com" className="footer-link">Webflow</a>
                    </span>
                </Row>
                <Row>
                    <a href="https://instagram.com" className="social-icon"><img src='../../assets/icons/cart.png' alt="Instagram" /></a>
                    <a href="https://twitter.com" className="social-icon"><img src='../../assets/icons/cart.png' alt="Twitter" /></a>
                    <a href="https://youtube.com" className="social-icon"><img src='../../assets/icons/cart.png' alt="YouTube" /></a>
                </Row>
                </Row>
                
            </div>
        </footer>
    );
};
export default Footer;
