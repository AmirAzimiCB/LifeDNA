"use client";

import * as React from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = React.useState(false);
  const [portalTarget, setPortalTarget] = React.useState<Element | null>(null);

  React.useEffect(() => {
    setMounted(true);
    setPortalTarget(document.querySelector("#popup-portal"));
  }, []);

  if (!mounted || !portalTarget) return null;
  return createPortal(<>{children}</>, portalTarget);
};
export default Portal;
