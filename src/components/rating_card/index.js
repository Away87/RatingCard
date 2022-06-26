import React, { useState } from 'react';
import StarIcon from "../../images/icon-star.svg";
import {
    Container,
    Card,
    Header,
    IconContainer,
    HeaderIcon,
    Body,
    Heading,
    Paragraph,
    RatingIcons,
    Icon,
    Footer,
    Submit
} from "./ratingCardElements"

const RatingCard = () => {
    const [SelectButton, setSelectButton] = useState("")


  return (
    <>

    <Container>
        <Card>
            <Header>
                <IconContainer>
                    <HeaderIcon src={StarIcon} />
                </IconContainer>
            </Header>
            <Body>
                <Heading>How did we do?</Heading>
                <Paragraph>

                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!

                </Paragraph>
                <RatingIcons>
                    <Icon value={1} onClick={()=> setSelectButton("selected")}  className={SelectButton} >1</Icon>
                    <Icon value={2} onClick={()=> setSelectButton("selected")}  className={SelectButton} >2</Icon>
                    <Icon value={3} onClick={()=> setSelectButton("selected")}  className={SelectButton} >3</Icon>
                    <Icon value={4} onClick={()=> setSelectButton("selected")}  className={SelectButton} >4</Icon>
                    <Icon value={5} onClick={()=> setSelectButton("selected")} className={SelectButton}  >5</Icon>
                </RatingIcons>
            </Body>
            <Footer>
                <Submit>SUBMIT</Submit>
            </Footer>
        </Card>
    </Container>
    </>
  )
}

export default RatingCard