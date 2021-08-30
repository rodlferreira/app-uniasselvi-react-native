import React from "react";
import { ScrollView } from "react-native";

import * as S from "./styles";

export function FreeCourses() {
  return (
    <S.ContainerCardsHistory>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.ContainerImage1>
            <S.ImageCard1 source={require("../../assets/ImageCourse1.png")} />
        
            <S.ContainerText>
            <S.TextImage1>Administração, Marketing e Negócios</S.TextImage1>
            </S.ContainerText>
        </S.ContainerImage1>

        <S.ContainerImage2>
            <S.ImageCard2
            source={require("../../assets/ImageCourse2.png")}
            resizeMode="contain"
            />
          
            <S.ContainerTextImage2>
            <S.TextImage2>Agricultura e Meio Ambiente</S.TextImage2>
            </S.ContainerTextImage2>
        </S.ContainerImage2>
        <S.ContainerImage3>
            <S.ImageCard3>
            <S.ContainerTextImage3>
                <S.TextImage3>Ver Todos</S.TextImage3>
            </S.ContainerTextImage3>
            </S.ImageCard3>
            
        </S.ContainerImage3>
      </ScrollView>
    </S.ContainerCardsHistory>
  );
}