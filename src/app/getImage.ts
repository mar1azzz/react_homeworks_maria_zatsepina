export function getImgUrl(image: string): string {
  return new URL(`/src/assets/images/${image}`, import.meta.url).href;
}

export function getIcnUrl(icon: string): string {
  return new URL(`/src/assets/icons/${icon}`, import.meta.url).href;
}
