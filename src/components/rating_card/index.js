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
    ListLabel,
    CustomRadio,
    Icon,
    Footer,
    Submit
} from "./ratingCardElements";

import ThanksCard from "../thanks_card";


const RatingCard = () => {
    const [rated, setRated] = useState(false);
    const [rateVal, setRateVal] = useState(undefined)
    

    const GetVal = (event) => {
        setRateVal(event.target.value)
    }

    const submitRate = () => {
        if (rateVal == undefined) {
            alert("Please rate us between 1-5!")
        }
        else {
            setRated(true)
        }
    }


  return (
    <>

    <Container>
        <Card>

            {rated ? (<ThanksCard value={rateVal} />) : 
            
            (<>
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
                <RatingIcons onSubmit={e=>GetVal(e)}>
                    <ListLabel>  
                        <Icon  name='rateicons' value="1" type='radio' onClick={e=>GetVal(e)} />
                        <CustomRadio value="'1'"></CustomRadio> 
                    </ListLabel>
                    <ListLabel>  
                        <Icon  name='rateicons' value="2" type='radio' onClick={e=>GetVal(e)} />
                        <CustomRadio value="'2'"></CustomRadio> 
                    </ListLabel>
                    <ListLabel>  
                        <Icon  name='rateicons' value="3" type='radio' onClick={e=>GetVal(e)} />
                        <CustomRadio value="'3'"></CustomRadio> 
                    </ListLabel>
                    <ListLabel>  
                        <Icon  name='rateicons' value="4" type='radio' onClick={e=>GetVal(e)} />
                        <CustomRadio value="'4'"></CustomRadio> 
                    </ListLabel>
                    <ListLabel>  
                        <Icon  name='rateicons' value="5" type='radio' onClick={e=>GetVal(e)} />
                        <CustomRadio value="'5'"></CustomRadio> 
                    </ListLabel>
                </RatingIcons>
            </Body>
            <Footer>
                <Submit type='submit' onClick={submitRate}>SUBMIT</Submit>
            </Footer>
            </>)
            
            } 
        </Card>
    </Container>
    </>
  )
}

export default RatingCard