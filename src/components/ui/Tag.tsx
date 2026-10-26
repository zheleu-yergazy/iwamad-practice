import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

function Tag({ children }: TagProps) {
  return <span className="ui-tag">{children}</span>;
}

export default Tag;
