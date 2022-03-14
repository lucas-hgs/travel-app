import React from "react";
import { Container, TextContainer, TitleText, SubTitle } from './styles';

import homeImage from '../../assets/home.jpg';
import { Button } from "../../components/Button";


export function SignIn() {
    return(
        <Container source={homeImage}>
            <TextContainer>
                <TitleText>
                    Discover the world{"\n"}Find a new adventure
                </TitleText>
                <SubTitle>Find tours and trips at the best price</SubTitle>
            </TextContainer>

            <Button title="Get Started" color="white" />
        </Container>
    )
}