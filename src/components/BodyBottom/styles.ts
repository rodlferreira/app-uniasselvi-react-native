import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native'


export const Container = styled.View`
    height: 500px;
    margin-top: ${scale(28)}px;
    background-color: ${({ theme }) => theme.colors.gray_body};
    border-top-left-radius: ${scale(40)}px;
    border-top-right-radius: ${scale(40)}px;
`;

export const Content = styled.View`
    padding-left: ${scale(32)}px;
    padding-top: ${scale(36)}px;

`;




export const Wrapper = styled.View`

`;

export const ContentIcon = styled.View`
    align-items: center;
`;

export const Icon = styled.View`
    width: ${scale(86)}px;
    height: ${scale(86)}px;
    background-color: ${({ theme }) => theme.colors.white};
    justify-content: center;
    align-items: center;
    border-radius: ${scale(43)}px;
    margin-right: ${scale(8)}px;
    margin-left: ${scale(8)}px;
`;



export const ImageJob = styled.Image``;

export const ContainerText = styled.View`
    align-items: center;
    justify-content: center;
    max-width: ${scale(59)}px;
`;

export const Text = styled.Text`
    font-size: ${scale(12)}px;
    font-weight: 700;
    align-items: center;
`;

