import React, { useState } from "react";
import { Switch } from "react-native";
import * as S from "./styles";

interface IProps {
  toggledTheme: () => void;
}

export function Header({ toggledTheme }: IProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      toggledTheme();
    };
  return (
    <S.Container>
      <S.Wrapper>
        <S.CourseAndProfession>
          <S.CourseWrapper>
            <S.CourseText>UI Design</S.CourseText>
          </S.CourseWrapper>

          <S.ProfessionWrapper>
            <S.ProfessionText>Design de Interface</S.ProfessionText>
          </S.ProfessionWrapper>
        </S.CourseAndProfession>
        <S.ModeAndLocation>
          <S.Mode>
              <S.TextMode>
                  Light/DarkMode
              </S.TextMode>
         
                <Switch
                trackColor={{ false: "#fff", true: "#4C4C4C" }}
                thumbColor={isEnabled ? "#fff" : "#D6B617"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                
                />
            
          </S.Mode>
          <S.Location>
            <S.LocationText >Blumenau</S.LocationText>
          </S.Location>
        </S.ModeAndLocation>
      </S.Wrapper>
    </S.Container>
  );
}
