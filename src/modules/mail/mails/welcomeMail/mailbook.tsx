import { welcomeMail } from '.';
import { MailBookRegistration } from '../types';

const register: MailBookRegistration = (router, recipient) => {
  router.register({
    group: 'Welcome Mails',
    type: 'First intro',
    example: 'for Gernot',
    mail: () =>
      welcomeMail.render(
        {
          name: 'Gernot'
        },
        recipient
      )
  });

  router.register({
    group: 'Welcome Mails',
    type: 'First intro',
    example: 'for Sebastian',
    mail: () =>
      welcomeMail.render(
        {
          name: 'Sebastian'
        },
        recipient
      )
  });
};

export default register;
