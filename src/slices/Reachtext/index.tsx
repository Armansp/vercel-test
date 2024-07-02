import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Reachtext`.
 */
export type ReachtextProps = SliceComponentProps<Content.ReachtextSlice>;

/**
 * Component for "Reachtext" Slices.
 */
const Reachtext = ({ slice }: ReachtextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.simpletextfield} />
    </section>
  );
};

export default Reachtext;
