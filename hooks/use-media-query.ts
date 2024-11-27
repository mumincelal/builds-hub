'use client';

import React from 'react';
import { useCallbackRef } from '@/hooks/use-callback-ref';

type MediaQueryCallback = (event: MediaQueryListEvent) => void;

const listen = (query: MediaQueryList, callback: MediaQueryCallback) => {
  try {
    query.addEventListener('change', callback);
    return () => query.removeEventListener('change', callback);
  } catch {
    query.addEventListener('change', callback);
    return () => query.removeEventListener('change', callback);
  }
};

export type UseMediaQueryOptions = {
  fallback?: boolean[];
  ssr?: boolean;
  getWindow?(): typeof window;
};

export const useMediaQuery = (
  query: string[],
  options: UseMediaQueryOptions
): boolean[] => {
  const { fallback: _fallback, ssr = true, getWindow } = options;
  const getWin = useCallbackRef(getWindow);

  const queries = Array.isArray(query) ? query : [query];

  const fallback = _fallback?.filter((v) => v != null) as boolean[];

  const [value, setValue] = React.useState(() =>
    queries.map((query, index) => ({
      media: query,
      matches: !ssr
        ? (getWin() ?? window).matchMedia?.(query)?.matches
        : !!fallback[index]
    }))
  );

  React.useEffect(() => {
    const win = getWin() ?? window;
    setValue((prev) => {
      const current = queries.map((query) => ({
        media: query,
        matches: win.matchMedia(query).matches
      }));

      return prev.every(
        (v, i) =>
          v.matches === current[i]?.matches && v.media === current[i].media
      )
        ? prev
        : current;
    });

    const mql = queries.map((query) => win.matchMedia(query));

    const handler = (evt: MediaQueryListEvent) => {
      setValue((prev) =>
        prev.slice().map((item) => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        })
      );
    };

    const cleanups = mql.map((v) => listen(v, handler));
    return () => cleanups.forEach((fn) => fn());
  }, [getWin]);

  return value.map((item) => item.matches);
};
