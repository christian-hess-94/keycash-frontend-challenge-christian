import React from 'react';
import {Button} from 'react-native';
import {CardContainer, CardSubtitle, CardTitle} from './styles';

interface CardProps {
  title?: string;
  subtitle?: string;
  content?: any;
  buttons?: {title: string; onPress: () => void}[];
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  subtitle,
  content,
  buttons,
  children,
}) => {
  return (
    <CardContainer>
      {!!title && <CardTitle>{title}</CardTitle>}
      {!!subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {content}
      {children}
      {buttons?.map(({title, onPress}) => (
        <Button title={title} onPress={onPress} />
      ))}
    </CardContainer>
  );
};

export default Card;
