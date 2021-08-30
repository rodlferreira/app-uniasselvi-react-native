import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native'




export const Wrapper = styled.TouchableOpacity`
 
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
    max-width: ${scale(70)}px;
   
`;

export const Text = styled.Text`
    font-size: ${scale(12)}px;
    font-weight: bold;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray_primary};
`;

export const ContentIconFirst = styled.View`
    align-items: center;
`;

export const IconFirst = styled.View`
    width: ${scale(86)}px;
    height: ${scale(86)}px;
    background-color: ${({ theme }) => theme.colors.white};
    justify-content: center;
    align-items: center;
    border-radius: ${scale(43)}px;
    margin-right: ${scale(8)}px;

`;