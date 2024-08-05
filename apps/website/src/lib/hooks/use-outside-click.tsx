/** eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
/** eslint-disable @typescript-eslint/no-unsafe-call */
/** eslint-disable @typescript-eslint/no-explicit-any */
/** eslint-disable @typescript-eslint/no-unsafe-member-access */
/** eslint-disable @typescript-eslint/no-explicit-any */
/** eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};