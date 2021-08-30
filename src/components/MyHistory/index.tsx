import React from "react";
import { Linking, ScrollView } from 'react-native';

import * as S from "./styles";


export function MyHistory() {

    async function handleSendLinkTestVocation(){
        const testVocation = await Linking.openURL('https://admission.worka.love/chat/uniasselvi');
        return testVocation;
    }

  return (

      <S.ContainerCardsHistory>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <S.ImageCard1
            source={require("../../assets/Image1.png")}>
                <S.ContainerTextImage1>
                    <S.TextImage1>Seleção de curso</S.TextImage1>
                </S.ContainerTextImage1>
            </S.ImageCard1>

            <S.ImageCard2
            source={require("../../assets/Image2.png")}resizeMode="contain">
                <S.ContainerTextImage2>
                    <S.TextImage2>O curso</S.TextImage2>
                </S.ContainerTextImage2>
            </S.ImageCard2>

            <S.ImageCard3
            source={require("../../assets/Image3.png")}resizeMode="contain">
                <S.ContainerTextImage3>
                    <S.TextImage3>Investimento</S.TextImage3>
                </S.ContainerTextImage3>
            </S.ImageCard3>
            <S.ContainerClick onPress={() => handleSendLinkTestVocation()}>
                <S.ImageCard4
                source={require("../../assets/Image4.png")}resizeMode="contain">
                    <S.ContainerTextImage4>
                        <S.TextImage4>Teste Vocacional</S.TextImage4>
                    </S.ContainerTextImage4>
                </S.ImageCard4>
            </S.ContainerClick>
        </ScrollView>
      </S.ContainerCardsHistory>
  
  );
}
