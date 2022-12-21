import { HeadingBorder, HeadingContent, HeadingText } from "./style";
import { HeadingInterface } from "./types";

const Heading = ({ label }: HeadingInterface) => {
  return (
    <HeadingText>
      <HeadingContent>{label}</HeadingContent>
      <HeadingBorder />
    </HeadingText>
  );
};

export default Heading;
