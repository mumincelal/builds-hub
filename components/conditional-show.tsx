import type React from "react";

type ConditionalShowProps<T> = {
  when: T | undefined | null | false;
  fallback?: React.ReactNode;
  children: React.ReactNode | ((item: T) => React.ReactNode);
};

export const ConditionalShow = <T,>({
  when,
  fallback = null,
  children
}: ConditionalShowProps<T>) => {
  if (when) {
    if (typeof children === "function") {
      return children(when);
    }

    return children;
  }

  return fallback;
};
