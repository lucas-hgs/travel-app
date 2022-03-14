import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';
 
interface Props extends RectButtonProps {
    title: string;
    color?: string;
}

export function Button({ title, color }: Props) {
    return(
        <Container color={color}>
            <Title color={color}>{title}</Title>
        </Container>
    );
}