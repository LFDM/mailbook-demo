import { render } from 'mjml-react';

export const renderMjml = (element: JSX.Element): string => {
  const { html } = render(element, { validationLevel: 'soft' });
  return html;
};
