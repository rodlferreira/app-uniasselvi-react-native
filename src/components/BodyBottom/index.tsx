import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import {Information } from '../Information';

import * as S from './styles';

export function BodyBottom(){
    return(
        <S.Container>
            <S.Content>
               <Information />
            </S.Content>
        </S.Container>  
    )
}