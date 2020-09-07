import * as React from "react";
import { UtmParams } from "../../../../domainTypes/routes";

type Props = {
  utmSource: string;
  utmCampaign: string;
  settingsRoute?: (utmParams: UtmParams) => string;
  children?: React.ReactNode;
};

export const Footer = ({
  children,
  utmSource,
  utmCampaign,
  settingsRoute,
}: Props) => {
  return null;
};
