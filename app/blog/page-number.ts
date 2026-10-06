export function parseBlogPage(value: string, totalPages: number): number | null {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const page = Number(value);
  if (!Number.isSafeInteger(page) || page > totalPages) return null;
  return page;
}
