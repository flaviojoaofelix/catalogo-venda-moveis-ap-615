/**
 * Resolves the full URL for a static asset, ensuring it works with the
 * application's base path (important for GitHub Pages deployment).
 *
 * @param path - The absolute path to the asset (e.g., '/assets/image.jpg')
 * @returns The full URL with the base path prepended
 */
export function getAssetUrl(path: string): string {
  // If the path is already a full URL or data URI, return it as is
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  // Remove leading slash if present to avoid double slashes when joining
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // import.meta.env.BASE_URL usually ends with a slash (e.g., '/base-path/')
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
