'use client';

import React from 'react';

/**
 * This hook is user-land implementation of the experimental `useEffectEvent` hook.
 * React docs: https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event
 */
export const useCallbackRef = <Args extends unknown[], Return>(
  callback: ((...args: Args) => Return) | undefined,
  deps: React.DependencyList = []
) => {
  const callbackRef = React.useRef<typeof callback>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  React.useInsertionEffect(() => {
    callbackRef.current = callback;
  });

  return React.useCallback(
    (...args: Args) => callbackRef.current?.(...args),
    deps
  );
};
