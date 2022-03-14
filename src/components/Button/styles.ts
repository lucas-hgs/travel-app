import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

interface Props {
    color?: string;
}

const themeColor = {
    primary: {
        background: '#FFF',
        text: '#000'
    },
    secondary: {
        background: '#3486ff',
        text: '#FFF'
    }
}

export const Container = styled(RectButton)<Props>`
    width: 100%;

    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color === 'white' ? themeColor.primary.background : themeColor.secondary.background };

    border-radius: 10px;

    margin-bottom: 12px;
`;

export const Title = styled.Text<Props>`
    color: ${({ color }) => color === 'white' ? themeColor.primary.text : themeColor.secondary.text };
    font-size: 15px;

    font-weight: bold;
`;