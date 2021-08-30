import React from 'react';
import { Body } from '../../components/Body';
import { BodyBottom } from '../../components/BodyBottom';
import { Header } from '../../components/Header';
import * as S from './styles';

interface IProps {
    toggledTheme: () => void;
}

export default function Home({ toggledTheme }: IProps) {
    return(
        <S.Container>
            <Header toggledTheme={toggledTheme}/>
            <S.Scroll>
                <Body />
                <BodyBottom />
            </S.Scroll>
        </S.Container>
    );
}