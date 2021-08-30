import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${scale(54)}px;
    background-color: ${({theme})=> theme.colors.yellow_primary};
`

export const Wrapper = styled.View`
    flex-direction: row;
    padding-right: ${scale(32)}px;
    padding-left: ${scale(32)}px;
    justify-content: space-between;
    align-items: center;
`

export const CourseAndProfession = styled.View`

`

export const CourseWrapper = styled.View`

`

export const CourseText = styled.Text`
    font-size: ${scale(24)}px;
    font-weight: 700;
    ${({theme})=> theme.colors.gray_primary};
`

export const ProfessionWrapper = styled.View`

`

export const ProfessionText = styled.Text`

`

export const ModeAndLocation = styled.View`
align-items: flex-end;

`



export const Mode = styled.View `
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const TextMode = styled.Text`
    font-size: ${scale(8)}px;
    font-weight: 900;
    ${({theme})=> theme.colors.gray_primary};
`

export const Location = styled.View `

`
export const LocationText = styled.Text`
    font-size: ${scale(16)}px;
    font-weight: 500;
    ${({theme})=> theme.colors.gray_primary};
`