import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import {Information } from '../Information';

import * as S from './styles';

import { MyHistory } from '../MyHistory';
import { FreeCourses } from '../FreeCourses';
export function BodyBottom(){
    return(
        <S.Container>
            <S.Content>
               <Information />
               <S.ContainerMyHistory>
                   <S.TextMyHistory>Minha História</S.TextMyHistory>
                   <MyHistory />
               </S.ContainerMyHistory>
               <S.FreeCoursesWrapper>
                   <S.TextFreeCourses>Cursos Livres</S.TextFreeCourses>
               </S.FreeCoursesWrapper>
               <FreeCourses />
            </S.Content>
        </S.Container>  
    )
}