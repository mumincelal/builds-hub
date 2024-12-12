export const abbreviate = (value: string) =>
  value
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("");
