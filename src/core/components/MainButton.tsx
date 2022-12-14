import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IMyTheme} from '../../../styles/main.styles';
import useAppTheme from '../hooks/context/UseAppTheme';
import ProfileBg from '../../../assets/svg/profile-bg.svg';

type MainButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  fullWidth?: boolean;
  noShadows?: boolean;
};

const mainColor = 'rgba(32, 55, 115, 0.73)';

export const MainButton: React.FC<MainButtonProps> = ({
  onPress,
  title,
  disabled,
  noShadows = false,
}) => {
  const theme = useAppTheme();
  const mainStPass = styles(theme, noShadows);
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...mainStPass.buttonContainer,
        backgroundColor: disabled ? '#C8D1E1' : mainColor,
      }}>
      <ProfileBg
        style={{position: 'absolute', left: 0, top: -20}}
        width={600}
        height={440}
      />
      <Text style={mainStPass.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (theme: IMyTheme, nowShadows: boolean) =>
  StyleSheet.create({
    buttonContainer: {
      position: 'relative',
      backgroundColor: mainColor,
      width: '100%',
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      paddingTop: 12,
      paddingBottom: 12,
      marginBottom: 10,
      overflow: 'hidden',
      shadowColor: nowShadows ? 'transparent' : '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 8,
    },
    btnTitle: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'MazzardM-Bold',
    },
  });
