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
    ListItem,
    Icon,
    Footer,
    Submit
} from "./ratingCardElements";

import ThanksCard from "../thanks_card";


const RatingCard = () => {
    const [rated, setRated] = useState(false);
    const [rateVal, setRateVal] = useState("")
    


    const handleClick = (e) => {
        const prevActive = document.querySelector(".active")
        if (prevActive == undefined) {}
        else {
            prevActive.classList.remove("active")
        }
        e.target.className += " active"
        setRateVal(e.target.textContent)
    }
    
    const Rate = (e) =>{ 
        if (rateVal !== "") {setRated(true)}
        else {
            alert("Please rate us between 1-5.")
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
                <RatingIcons>
                    <ListItem><Icon onClick={(e)=>handleClick(e)} >1</Icon></ListItem>
                    <ListItem><Icon onClick={(e)=>handleClick(e)} >2</Icon></ListItem>
                    <ListItem><Icon onClick={(e)=>handleClick(e)} >3</Icon></ListItem>
                    <ListItem><Icon onClick={(e)=>handleClick(e)} >4</Icon></ListItem>
                    <ListItem><Icon onClick={(e)=>handleClick(e)} >5</Icon></ListItem>
                </RatingIcons>
            </Body>
            <Footer>
                <Submit onClick={Rate}>SUBMIT</Submit>
            </Footer>
            </>)
            
            } 
        </Card>
    </Container>
    </>
  )
}

export default RatingCard