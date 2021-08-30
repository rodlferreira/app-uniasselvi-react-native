import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native'



export const Container = styled.View`
    height: ${scale(348)}px;
    padding-left: ${scale(32)}px;
    padding-right: ${scale(32)}px;
    background-color:${({theme}) => theme.colors.yellow_primary};
`;

export const Wrapper = styled.View``;

export const TitlePromotion = styled.View`
    margin-top: ${scale(24)}px;
    margin-bottom: ${scale(16)}px;
`;

export const TextPromotion = styled.Text`
    font-size: ${scale(8)}px;
`;

export const Announce = styled.View`
    justify-content: flex-start;

`;

export const ImageBackground = styled.Image`
    width: ${scale(242)}px;
    height: ${scale(316)}px;
    position: absolute;
`;

export const WrapperImage = styled.View`
    width: 100%;
`;

export const SelectionProcess = styled.View`
    max-width: ${scale(178)}px;
    width: 100%;
    align-self: flex-end;
    margin-bottom: ${scale(8)}px;
    
`;

export const TextSelectionProcess = styled.Text`
    font-size: ${scale(24)}px;
    font-weight: bold;
    color:${({theme})=> theme.colors.gray_primary};
    text-align: center;
    margin-left: ${scale(32)};
  
`;

export const Values = styled.View`
    z-index: 10;
`;

export const NumberValues = styled.View`
    align-self: flex-end;
    flex-direction: row;
    align-items: center;
`;

export const PromotionWrapper  = styled.View`
    width: 100%;
`;

export const TextNumberValue = styled.Text`
    font-size: ${scale(14)}px;
    font-weight: 400;
    color:${({theme})=> theme.colors.white};
    align-items: center;
    align-self: flex-end;
    margin-right: ${scale(8)}px;
`;

export const TagValue = styled.View`
    align-items: flex-end;
    
`;

export const TextTagValue = styled.Text`
    font-size: ${scale(12)}px;
    font-weight: 900;
    color: ${({theme})=> theme.colors.white};
    align-items: center;
`;

export const MaxValue = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const TextPor  = styled.Text`
    font-size: ${scale(18)}px;
    font-weight: 500;
    color:${({theme})=> theme.colors.white};
    align-items: center;
    margin-right: ${scale(4)}px;
`;

export const TextMaxValue = styled.Text`
    font-size: ${scale(24)}px;
    font-weight: 500;
    color: ${({theme})=> theme.colors.white};
    align-items: center;
`;

export const ButtonRegister = styled.View`
    
    border-radius: 0.3px;
    z-index: 20;
    align-items: flex-end;
`;

export const ButtonClick = styled.TouchableOpacity`
    background-color: ${({theme})=> theme.colors.white};
    border-radius: ${scale(10)}px;
    margin-top: ${scale(8)}px;
`;

export const ButtonText = styled.Text`
    font-size: ${scale(18)}px;
    font-weight: 500;
    color: ${({theme})=> theme.colors.gray_primary};
    align-items: center;
    padding: ${scale(10)}px 
`;