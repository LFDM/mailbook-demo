import * as React from 'react';
import { MjmlBody, MjmlWrapper } from 'mjml-react';

type Props = {
  size?: 'S' | 'M';
};

const getSize = (s?: Props['size']) => {
  if (s === 'S') {
    return 300;
  }

  return 600;
};

export const Body: React.FC<Props> = ({ size, children }) => {
  return (
    <MjmlBody width={getSize(size)}>
      <MjmlWrapper paddingTop={0}>{children}</MjmlWrapper>
    </MjmlBody>
  );
};
