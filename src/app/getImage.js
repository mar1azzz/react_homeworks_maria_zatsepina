export function getImgUrl(image) {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
}
