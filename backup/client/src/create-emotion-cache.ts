import createCache from '@emotion/cache';
/**
 * @link https://emotion.sh/docs/@emotion/cache
 * @returns createCache allows for low level customization of how styles get inserted by emotion.
 * It’s intended to be used with the <CacheProvider/> component to override the default cache,
 *  which is created with sensible defaults for most applications.
 */
export default function createEmotionCache() {
  return createCache({ key: 'css' });
}
