import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CustomButton = ({ onPress, title, btnKind, variant, size, iconOnly, iconName }) => {
  const getButtonStyle = () => {
    let buttonStyles = [styles.buttonBase];
    if (btnKind === 'rounded') buttonStyles.push(styles.rounded);
    if (btnKind === 'outlined') buttonStyles.push(styles.outlined);
    if (variant === 'primary') buttonStyles.push(styles.primary);
    if (variant === 'secondary') buttonStyles.push(styles.secondary);
    if (size === 'sm') buttonStyles.push(styles.sm);
    if (size === 'md') buttonStyles.push(styles.md);
    if (size === 'lg') buttonStyles.push(styles.lg);
    return buttonStyles;
  };

  const getTextStyle = () => {
    let textStyles = [styles.buttonText];
    if (variant === 'primary') textStyles.push(styles.textPrimary);
    if (variant === 'secondary') textStyles.push(styles.textSecondary);
    if (btnKind === 'outlined' && variant === 'primary') textStyles.push(styles.textOutlinedPrimary);
    if (btnKind === 'outlined' && variant === 'secondary') textStyles.push(styles.textOutlinedSecondary);
    return textStyles;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      {iconOnly ? (
        <MaterialIcons name={iconName} size={24} color="white" />
      ) : (
        <>
          {iconName && <MaterialIcons name={iconName} size={24} color="white" style={styles.icon} />}
          <Text style={getTextStyle()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  rounded: {
    borderRadius: 20,
  },
  outlined: {
    borderWidth: 1,
    borderColor: 'white', // adjust border color as needed
    backgroundColor: 'transparent',
  },
  primary: {
    backgroundColor: '#FFAF45',
  },
  secondary: {
    backgroundColor: '#000000',
  },
  sm: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  md: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  lg: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textPrimary: {
    color: 'white',
  },
  textSecondary: {
    color: 'white',
  },
  textOutlinedPrimary: {
    color: '#FFAF45',
  },
  textOutlinedSecondary: {
    color: '#000000',
  },
  icon: {
    marginRight: 8,
  },
});

export default CustomButton;
