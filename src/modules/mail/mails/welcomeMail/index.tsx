import {
  Mjml,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlTitle
} from 'mjml-react';
import * as React from 'react';
import { IWelcomeMail } from '../../../../domainTypes/mail';
import { Attributes } from '../../components/Attributes';
import { Body } from '../../components/Body';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import { renderMjml } from '../../services/render';
import { MailRenderer } from '../types';

const mail = ({ name }: IWelcomeMail['props']) => {
  return (
    <Mjml>
      <MjmlHead>
        <Attributes />
        <MjmlTitle>Welcome</MjmlTitle>
        <MjmlPreview>Hello there</MjmlPreview>
      </MjmlHead>
      <Body size="M">
        <MjmlSection>
          <MjmlColumn>
            <Title>Hello {name},</Title>
            <Text>Good to see you!</Text>
            <Button color="primary" href="https://getklima.com">
              Check out our website.
            </Button>
          </MjmlColumn>
        </MjmlSection>
      </Body>
    </Mjml>
  );
};

export const welcomeMail: MailRenderer<IWelcomeMail> = {
  type: 'WELCOME_MAIL',
  render: (props) => {
    return Promise.resolve({
      subject: `Welcome ${props.name}`,
      html: renderMjml(mail(props))
    });
  }
};
