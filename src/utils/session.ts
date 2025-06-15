
/**
 * Utilities for managing session info, tokens, preferences, and last-visited page.
 */

// Secure local/session storage helpers
export const set = (key: string, value: string) => localStorage.setItem(key, value);
export const get = (key: string) => localStorage.getItem(key);
export const remove = (key: string) => localStorage.removeItem(key);

export const saveLastVisited = (path: string) => set('last_visited_path', path);
export const getLastVisited = () => get('last_visited_path') || '/dashboard';

export const saveToken = (token: string) => set('firebase_token', token);
export const getToken = () => get('firebase_token');
export const clearToken = () => remove('firebase_token');

export const saveSidebarState = (state: string) => set('sidebar_state', state);
export const getSidebarState = () => get('sidebar_state');

export const saveTheme = (theme: string) => set('theme', theme);
export const getTheme = () => get('theme');
