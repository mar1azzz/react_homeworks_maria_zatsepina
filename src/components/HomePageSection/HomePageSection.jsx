import styled from 'styled-components'; 
import Button from '../Button/Button';
import { getImgUrl, getIcnUrl } from '../../app/getImage';

const MainContainer = styled.div`
  background-image: url(${getImgUrl('homepage_background.png')});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 95vh;
  padding: 0 10%;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #333;
`;

const TitleText = styled.h1`
  font-size: 60px;
  color: #333;
  line-height: 60px;
  font-family: Inter;
  font-weight: 400;
  span {
    color: #35B8BE;
  }
`;

const SubtitleText = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 24.12px;
  color: #546285;
  margin: 10px 0;
  width: 539px;
  height: 73px;
`;

const StyledButtonWrapper = styled.div`
  margin-top: 20px;

  button{
    width: 200px;
    height: 60px; 
    font-size: 17px;
    border-radius: 6px; 
    font-family: Inter;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  flex-direction: column;

  img {
    width: 100px;
    margin-right: 10px;
  }

  span {
    color: #35B8BE;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const FoodImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;

const HomePageSection = () => {
  const starsIcon = getIcnUrl('trustpilot_star.png');
  const mainImage = getImgUrl('home_page_picture.png');

  return (
    <MainContainer>
      <TextContainer>
        <TitleText>
          Beautiful food & takeaway, <span>delivered</span> to your door.
        </TitleText>
        <SubtitleText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
        </SubtitleText>
        <StyledButtonWrapper>
          <Button buttonName="Place an Order" isSelected={false} isInverted={false} onClickHandler={() => {}} />
        </StyledButtonWrapper>
        <RatingWrapper>
          <img src={starsIcon} alt="Trustpilot Stars" />
          <p>
            <span>4.8 out of 5</span> based on 2000+ reviews
          </p>
        </RatingWrapper>
      </TextContainer>
      <ImageContainer>
        <FoodImage src={mainImage} alt="Delicious food" />
      </ImageContainer>
    </MainContainer>
  );
};

export default HomePageSection;
