import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native'



export const ContainerCardsHistory = styled.View`
    margin-top: ${scale(8)}px;
`;

export const CardsMyHistory = styled.View``;

export const ContainerImage1 = styled.View`
align-items: center;
`;

export const ImageCard1 = styled.Image`
    width: ${scale(132)}px;
    height: ${scale(155)}px;
    align-items: center;
    justify-content: center;
    margin-right: ${scale(8)}px;
`;

export const ContainerTextImage1 = styled.View`
    max-width: ${scale(97)}px;
    
`;

export const TextImage1 = styled.Text`
    color: ${({ theme }) => theme.colors.gray_primary};
    font-weight: bold;
    text-align: center; 
    font-size: ${scale(14)}px;
`;

export const ContainerText = styled.View`
    max-width: ${scale(96)}px;
    
`;

export const ImageCard2 = styled.Image`
    width: ${scale(132)}px;
    height: ${scale(155)}px;
    align-items: center;
    justify-content: center;
    margin-right: ${scale(8)}px;
    margin-left: ${scale(8)}px;
`;

export const ContainerTextImage2 = styled.View`
    max-width: ${scale(96)}px;
`;

export const TextImage2 = styled.Text`
    color: ${({ theme }) => theme.colors.gray_primary};
    font-weight: bold;
    text-align: center; 
    font-size: ${scale(14)}px;
`;

export const ImageCard3 = styled.View`
    width: ${scale(132)}px;
    height: ${scale(155)}px;
    align-items: center;
    justify-content: center;
    margin-right: ${scale(8)}px;
    margin-left: ${scale(8)}px;
    background-color: ${({theme}) => theme.colors.yellow_primary};
    border-radius: ${scale(10)}px;
`;

export const ContainerTextImage3 = styled.View`
    max-width: ${scale(97)}px;
`;

export const TextImage3 = styled.Text`
    color: ${({ theme }) => theme.colors.gray_primary};
    font-weight: bold;
    text-align: center;
    font-size: ${scale(18)}px;
`;

export const ImageCard4 = styled.ImageBackground`
    width: ${scale(132)}px;
    height: ${scale(155)}px;
    align-items: center;
    justify-content: center;
    margin-right: ${scale(8)}px;
    margin-left: ${scale(8)}px;
`;

export const ContainerTextImage4 = styled.View`
    max-width: ${scale(97)}px;
`;

export const TextImage4 = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-align: center;
    font-size: ${scale(18)}px;
`;

export const ContainerImage2 = styled.View`
    align-items: center;
`;

export const ContainerImage3 = styled.View`
    align-items: center;
`;