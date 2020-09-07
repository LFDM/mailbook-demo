import { IMail, MailRouter } from '@mailbook/core';
import { IRecipient, MailParams } from '../../../domainTypes/mail';

export type MailRenderer<T extends MailParams> = {
  type: T['type'];
  render: (props: T['props'], recipient: IRecipient) => Promise<IMail>;
};

export type MailBookRegistration = (
  router: MailRouter,
  defaultRecipient: IRecipient
) => void;
