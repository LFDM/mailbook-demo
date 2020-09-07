import {
  ClassNameProps,
  HrefProps,
  MjmlImage,
  MjmlImageProps,
  PaddingProps,
} from "mjml-react";
import * as React from "react";
import * as ENV from "../../../../env.json";

type Props = MjmlImageProps & PaddingProps & ClassNameProps & HrefProps;

export const Image = (props: Props) => {
  const src =
    props.src && props.src.startsWith("http")
      ? props.src
      : `${ENV.domains.app.public}${props.src}`;
  return <MjmlImage {...props} src={src} />;
};
