import React from "react";
import { ScrollView } from "react-native";
import * as S from "./styles";

export function Information() {
  return (
      <S.Wrapper>
       <ScrollView horizontal>
                    <S.Wrapper>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/job.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>Estágios e Empregos</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/Calender.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>Calendários</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/Building.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>O Polo</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/ead.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>EAD UNIASSELVI</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/Logo.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>A UNIASSELVI</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/work.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>Empregabilidade com Ensino Superior</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                </ScrollView>
      </S.Wrapper>
  
  );
}
