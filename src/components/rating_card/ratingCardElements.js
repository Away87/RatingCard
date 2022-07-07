import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(216, 12%, 8%);
    `

export var Card = styled.div`
    width: 85%;
    max-width: 375px;
    height: fit-content;
    background-color: hsl(213, 19%, 18%);
    border-radius: 1em;
    padding: 1.5em;
`

export const Header = styled.div`
    width: 100%;
    height: 17%;
    /* border: 2px green solid; */
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1%;
    width: 2.5em;
    aspect-ratio: 1;
    border-radius: 100%;
    background-color: var(--dark-blue-light) ;
    margin-bottom: 1em;
`

export const HeaderIcon = styled.img`
    width: 15px;
`



export const Body = styled.div`
    height: 83%;
    /* border: 2px white solid; */
`

export const Heading = styled.h2`
    font-family: inherit;
    color: var(--white);
    margin-bottom: 1em;
`

export const Paragraph = styled.p`
    font-size: 15px;
    color: var(--light-grey);
    margin-bottom: 2em;
    line-height: 1.5em;
`
export const RatingIcons = styled.form`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
`

export const ListLabel = styled.label`
    list-style-type: none;
`

export const CustomRadio = styled.div`
    border: none;
    background-color: var(--dark-blue-light) ;
    width: 2.5em;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
    color: var(--light-grey);
    cursor: pointer;
    font-weight: bold;
    font-size: 0.9rem;

    &::after{
        content: ${props=>props.value};
        display: block;
        /* transform: translateY(5%) */
    }

    &:hover {
        background-color: var(--medium-grey);
        color: var(--white);
    }
`

export const Icon = styled.input`
    display: none;
    &:checked + div {
        background-color: var(--orange);
        color: var(--white);
    }

`

export const Footer = styled.div`
    /* width: 100%; */
`
export const Submit = styled.button`
    width: 100%;
    height: 3em;
    border-radius: 20px;
    border: none;
    background-color: var(--orange);
    color: var(--white);
    letter-spacing: 2px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: var(--orange);
        background-color: var(--white);
    }
`