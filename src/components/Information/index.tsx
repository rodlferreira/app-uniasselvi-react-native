import React from "react";
import { Linking, ScrollView } from "react-native";
import * as S from "./styles";

export function Information() {

    async function handleSendLinkEmpr(){
        const testVocation = await Linking.openURL('https://blog.uniasselvi.com.br/blog/');
        return testVocation;
    }

    async function handleSendLinkInternship(){
        const Internship = await Linking.openURL('https://www.carreiras.uniasselvi.com.br/');
        return Internship;
    }

    async function handleSendLinkUniasselvi(){
        const Uniasselvi = await Linking.openURL('https://portal.uniasselvi.com.br/institucional');
        return Uniasselvi;
    }

    async function handleSendLinkBuilding(){
        const Building = await Linking.openURL('https://portal.uniasselvi.com.br/institucional/locais/teresina-pi-zona-sul');
        return Building;
    }

    async function handleSendLinkEad(){
        const Ead = await Linking.openURL('https://conteudos.uniasselvi.com.br/ead_uniasselvi/');
        return Ead;
    }

  return (
      <S.Wrapper>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <S.Wrapper onPress={() => handleSendLinkInternship()}>
                        <S.ContentIconFirst>
                        <S.IconFirst>
                            <S.ImageJob source={require('../../assets/job.png')} resizeMode="contain"/>
                        </S.IconFirst>
                        <S.ContainerText>
                            <S.Text>Estágios e Empregos</S.Text>
                        </S.ContainerText>
                        </S.ContentIconFirst>
                    </S.Wrapper>
                    <S.Wrapper onPress={() => console.log('aqui')}>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/Calender.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>Calendários</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper onPress={() => handleSendLinkBuilding()}>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/Building.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>O Polo</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper onPress={() => handleSendLinkEad()}>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/ead.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>EAD UNIASSELVI</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper onPress={() => handleSendLinkUniasselvi()}>
                        <S.ContentIcon>
                        <S.Icon>
                            <S.ImageJob source={require('../../assets/Logo.png')} resizeMode="contain"/>
                        </S.Icon>
                        <S.ContainerText>
                            <S.Text>A UNIASSELVI</S.Text>
                        </S.ContainerText>
                        </S.ContentIcon>
                    </S.Wrapper>
                    <S.Wrapper onPress={() => handleSendLinkEmpr()}>
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
