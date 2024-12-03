export function getImgUrl(image) {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
}

export function getIcnUrl(icon) {
  return new URL(`/src/assets/icons/${icon}`, import.meta.url).href;
}
