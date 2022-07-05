import React from 'react';
import {
  HeaderImage,
  Header,
  Body,
  RateCount,
  Heading,
  Paragraph
} from "./thanksCardElements";
import ThankYouImg from "../../images/illustration-thank-you.svg";

const ThanksCard = (props) => {
  return (
    <>
    <Header>
      <HeaderImage src={ThankYouImg} alt='Thank you img' />
    </Header>
    <Body>
      <RateCount>You selected {props.value} out of 5</RateCount>
      <Heading>Thank you!</Heading>
      <Paragraph>
      We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </Paragraph>
    </Body>
    </>
  )
}

export default ThanksCard