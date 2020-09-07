import { createServer, MailRouter } from '@mailbook/core';
import { IRecipient } from '../../domainTypes/mail';
import { MailBookRegistration } from './mails/types';
import welcomeMails from './mails/welcomeMail/mailbook';
import { sendMail } from './services/sender';

const MAILS: MailBookRegistration[] = [welcomeMails];

const port = +(process.env.PORT || 3106);

const router = new MailRouter();

const RECIPIENT: IRecipient = { email: '1986h@gmail.com' };

MAILS.forEach((m) => m(router, RECIPIENT));

const server = createServer(router, (m) => sendMail(m));

server.listen(port, () => console.log(`Listening on port ${port}!`));
