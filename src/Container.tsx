import React, { ReactNode, useState } from "react";

import Anchor from "./Anchor";
import Menu from "./Menu";

type renderPropsTypes = {
  isOpen: boolean;
  toggleOpen: () => void;
};

type PropTypes = {
  children: ({ isOpen, toggleOpen }: renderPropsTypes) => ReactNode;
};

export default ({ children }: PropTypes) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {children({
        isOpen,
        toggleOpen
      })}
    </>
  );
};
