/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Returns the normalized trailing-slash mount path (e.g. "/", "/site/", "/tourosburguer/")
 * derived from <base href> or the current window pathname.
 */
export function getMountBase(): string {
  if (typeof document !== 'undefined' && document.baseURI) {
    try {
      const baseUrl = new URL(document.baseURI);
      return baseUrl.pathname.endsWith('/') ? baseUrl.pathname : `${baseUrl.pathname}/`;
    } catch {
      // Fallback to location inspection below
    }
  }

  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname || '/';
    if (pathname === '/') return '/';
    if (pathname.endsWith('/')) return pathname;
    if (/\.[^/]+$/.test(pathname)) {
      return pathname.replace(/[^/]+$/, '') || '/';
    }
    return `${pathname}/`;
  }

  return '/';
}

/**
 * Resolves a public asset path cleanly both at root ("/") and under any subpath
 * prefix ("/site", "/site/", "/tourosburguer", "/tourosburguer/").
 */
export function assetUrl(relativePath: string): string {
  const clean = relativePath.replace(/^\/+/, '');
  const encoded = encodeURI(clean);
  if (typeof window !== 'undefined') {
    return `${getMountBase()}${encoded}`;
  }
  return `./${encoded}`;
}
