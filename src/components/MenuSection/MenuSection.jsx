import { Row } from "../Row/Row";
import { product } from "../../mockdata/mockdata";
import ProductCard from "../Card/Card";
import Button from "../Button/Button";
import BrowseMenuText from "../BrowseMenuText/BrowseMenuText";
import ToggleButtons from "../ToggelButtons/ToggelButtons";
import './MenuSection.css';
const MenuSection = () => {
    return (
        <section className="menu-section">
            <BrowseMenuText></BrowseMenuText>
            <ToggleButtons></ToggleButtons>
            <Row>
                {product.map((item, index) => (
                    <ProductCard key={index} product={item} />
                ))}
            </Row>  
            <div className="menu-footer">
                <Button buttonName="See more" onClickHandler={() => console.log("Button clicked")} />
            </div>
        </section>
    );
};

export default MenuSection;