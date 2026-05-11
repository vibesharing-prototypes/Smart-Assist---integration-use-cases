import "@diligentcorp/atlas-react-bundle/lib/index.d.ts";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "atlas-gn-diligent-logo": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "is-text-hidden"?: boolean },
        HTMLElement
      >;
    }
  }
}
