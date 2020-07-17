export const getImagePath = (
  imageName: string,
  ignoreRetina?: boolean,
): string => {
  const isRetina =
    !ignoreRetina &&
    (window.devicePixelRatio > 1 ||
      (window.matchMedia &&
        window.matchMedia(
          "(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)",
        ).matches))

  if (isRetina) {
    imageName = imageName.replace(".png", "@2x.png")
  }

  return `/images/${imageName}`
}
