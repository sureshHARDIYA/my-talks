import "react";

type PorscheElementProps = import("react").DetailedHTMLProps<
  import("react").HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [key: string]: any;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: `p-${string}`]: PorscheElementProps;
    }
  }
}

export {};
