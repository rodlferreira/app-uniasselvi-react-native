import React from 'react';
import { Body } from '../../components/Body';
import { BodyBottom } from '../../components/BodyBottom';
import { Header } from '../../components/Header';
import * as S from './styles';

export default function Home() {
    return(
        <S.Container>
            <Header />
            <S.Scroll>
                <Body />
                <BodyBottom />
            </S.Scroll>
        </S.Container>
    );
}