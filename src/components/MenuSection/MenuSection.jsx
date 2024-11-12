import { Component } from 'react';
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { product } from "../../mockdata/mockdata";
import ProductCard from "../Card/Card";
import Button from "../Button/Button";
import BrowseMenuText from "../BrowseMenuText/BrowseMenuText";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import './MenuSection.css';

class MenuSection extends Component {
    render() {
        return (
            <section className="menu-section">
                <BrowseMenuText />
                <ToggleButtons />
                <FlexContainer>
                    {product.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </FlexContainer>  
                <div className="menu-footer">
                    <Button buttonName="See more" onClickHandler={() => console.log("Button clicked")} />
                </div>
            </section>
        );
    }
}

export default MenuSection;
