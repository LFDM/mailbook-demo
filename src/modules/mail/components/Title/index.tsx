import {
  ClassNameProps,
  MjmlText,
  MjmlTextProps,
  PaddingProps,
  RequiredChildrenProps
} from 'mjml-react';
import * as React from 'react';
import { THEME } from '../../theme';

export const Title: React.FC<
  MjmlTextProps & RequiredChildrenProps & PaddingProps & ClassNameProps
> = props => {
  return (
    <MjmlText
      fontWeight={700}
      align="center"
      lineHeight={`${THEME.fontSize.xxxl}px`}
      fontSize={THEME.fontSize.xxl}
      paddingBottom="24px"
      {...props}
    />
  );
};
