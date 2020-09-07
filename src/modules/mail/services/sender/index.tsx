import { EmailData, IMail, IMailData } from '@mailbook/core';
import * as sendgrid from '@sendgrid/mail';
import { compact } from 'lodash';
import { IRecipient } from '../../../../domainTypes/mail';

const API_KEY = process.env.SENDGRID_API_KEY || '';

sendgrid.setApiKey(API_KEY);

export const sendMail = async (data: IMailData) => {
  const { text, html, ...other } = data;
  const content = compact([
    html && { type: 'text/html', value: html },
    text && { type: 'text/plain', value: text }
  ]);

  return sendgrid.send({ ...other, content } as any);
};

export const sendMails = async (
  from: EmailData,
  mails: {
    recipient: IRecipient;
    mail: IMail;
  }[]
) => {
  return Promise.all(
    mails.map((m) => {
      const { email } = m.recipient;
      if (!email) {
        return Promise.resolve(null);
      }
      return sendMail({
        from,
        to: email,
        subject: m.mail.subject,
        text: m.mail.text,
        html: m.mail.html
      });
    })
  );
};
