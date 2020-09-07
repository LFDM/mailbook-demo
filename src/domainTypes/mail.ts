export interface IRecipient {
  email: string;
}

export interface IWelcomeMail {
  type: 'WELCOME_MAIL';
  props: {
    name: string;
  };
}

export interface ICheckoutMail {
  type: 'CHECKOUT_MAIL';
  props: {
    name: string;
    plan: string;
  };
}

export type MailParams = IWelcomeMail | ICheckoutMail;
