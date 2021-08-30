import React from 'react';
import * as S from "./styles";

export function Body(){
    return(
        <S.Container>
            <S.Wrapper>
                <S.TitlePromotion>
                    <S.TextPromotion>
                    OFERTA ESPECIAL: 200% de desconto na matrícula + 35% no restante do curso (25% de bolsa + 10% pontualidade)
                    </S.TextPromotion>
                </S.TitlePromotion>
                <S.Announce>
                    
                    <S.SelectionProcess>
                        <S.TextSelectionProcess>
                            Processo Seletivo
                        </S.TextSelectionProcess>
                    </S.SelectionProcess>
                    <S.Values>
                            <S.PromotionWrapper>
                                <S.NumberValues>
                                    <S.TextNumberValue>
                                        de R$ 240,00
                                    </S.TextNumberValue>
                                    <S.TextTagValue>
                                        35% OFF
                                    </S.TextTagValue>
                                </S.NumberValues>
                            </S.PromotionWrapper>
                            <S.TagValue>
                               
                                <S.MaxValue>
                                    <S.TextPor>
                                        por
                                    </S.TextPor>
                                    <S.TextMaxValue>
                                         R$ 151,19
                                    </S.TextMaxValue>
                                </S.MaxValue>
                            </S.TagValue>
                        </S.Values>


                        <S.ButtonRegister>
                            <S.ButtonClick>
                                <S.ButtonText>
                                    Inscreva-se  
                                </S.ButtonText>   
                            </S.ButtonClick>                      
                        </S.ButtonRegister>

                    <S.ImageBackground source={require('../../assets/Image.png')} resizeMode="contain" />
                
                </S.Announce>
            </S.Wrapper>
        </S.Container>
    );
}