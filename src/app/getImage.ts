export function getImgUrl(image: string): string {
  return new URL(`/src/assets/images/${image}`, window.location.origin).href;
}

export function getIcnUrl(icon: string): string {
  return new URL(`/src/assets/icons/${icon}`, window.location.origin).href;
}
