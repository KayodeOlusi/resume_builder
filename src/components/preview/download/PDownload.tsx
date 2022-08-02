import { FC, RefObject } from "react";

interface IProps {
  innerRef: RefObject<HTMLDivElement>;
}

const PDownload: FC<IProps> = ({ innerRef }) => {
  return <div>PDownload</div>;
};

export default PDownload;
