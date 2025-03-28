/* eslint-disable react/no-children-prop */
import ListSection from '../ListSection/ListSection';
import { useTheme } from '../../context/ThemeContext';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import logo from '../../assets/icons/logo.png';
import instagramIconlight from '../../assets/icons/inst.png';
import twitterIconlight from '../../assets/icons/twitt.png';
import youtubeIconlight from '../../assets/icons/youtube.png';
import instagramIconDark from '../../assets/icons/inst-dark.png';
import twitterIconDark from '../../assets/icons/twitter-dark.png';
import youtubeIconDark from '../../assets/icons/youtube-dark.png';
import footerbgr from '../../assets/images/footerbg.png'
import './Footer.css';

const Footer: React.FC = () => {
    const { theme } = useTheme();
  
    return (
      <footer className={`footer ${theme}`}>
        <img src={footerbgr} alt="" className="footer-bg" />
        <div className="footer-content">
          <div className="footer-row">
            <ListSection
              title={<img src={logo} alt="Company Logo" />}
              children={["Takeaway & Delivery template for small - medium businesses."]}
              clickable={false}
            />
            <FlexContainer>
                <ListSection
                title="COMPANY"
                children={[
                    { label: 'Home', url: '/' },
                    { label: 'Order', url: '/order' },
                    { label: 'FAQ', url: '/faq' },
                    { label: 'Contact', url: '/contact' },
                ]}
                clickable={true}
                />
                <ListSection
                title="TEMPLATE"
                children={[
                    { label: 'Style Guide', url: 'https://www.google.com' },
                    { label: 'Changelog', url: 'https://www.google.com' },
                    { label: 'Licence', url: 'https://www.google.com' },
                    { label: 'Webflow University', url: 'https://www.google.com' },
                ]}
                clickable={true}
                />
                <ListSection
                title="FLOWBASE"
                children={[{ label: 'More Cloneables', url: '/cloneables' }]}
                clickable={true}
                />
            </FlexContainer>
        </div>
        <hr className="footer-divider" />
        <div className="footer-row">
          <span className="footer-text">
            Built by{" "}
            <a href="https://flowbase.co" className="footer-link">
              Flowbase
            </a>{" "}
            · Powered by{" "}
            <a href="https://webflow.com" className="footer-link">
              Webflow
            </a>
          </span>
          <FlexContainer>
            <a href="https://instagram.com" className="social-icon">
              <img src={theme === 'dark' ? instagramIconDark : instagramIconlight} alt="Instagram" />
            </a>
            <a href="https://twitter.com" className="social-icon">
              <img src={theme === 'dark' ? twitterIconDark : twitterIconlight} alt="Twitter" />
            </a>
            <a href="https://youtube.com" className="social-icon">
              <img src={theme === 'dark' ? youtubeIconDark : youtubeIconlight} alt="YouTube" />
            </a>
          </FlexContainer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;