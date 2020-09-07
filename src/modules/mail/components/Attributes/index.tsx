import * as React from 'react';
import { MjmlAttributes, MjmlAll } from 'mjml-react';

type Props = {};

export const Attributes = ({  }: Props) => {
  return (
    <MjmlAttributes>
      <MjmlAll fontFamily="Arial" />
    </MjmlAttributes>
  );
};
