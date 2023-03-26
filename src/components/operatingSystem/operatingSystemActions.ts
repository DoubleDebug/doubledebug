/**
 * After re-rendering OS windows, they return to their initial CSS style,
 * which is opacity = 0 and scale = 0.
 * This isn't always intended, so this method returns these properties to 100%.
 */
export function refreshWindows(
  currentWindowPositions: {
    id: string | undefined;
    position: string;
  }[]
) {
  const windowElements =
    document.querySelectorAll<HTMLDivElement>('.os-window');

  windowElements.forEach((element) => {
    element.style.opacity = '100%';
    element.style.transform = currentWindowPositions
      .find((pos) => pos.id === element.dataset.id)
      ?.position.replace(/scale\(.*?\)/gm, `scale(1)`)!;
  });
}

export function getCurrentPositions() {
  const windowElements =
    document.querySelectorAll<HTMLDivElement>('.os-window');

  return Array.from(windowElements).map((w) => ({
    id: w.dataset.id,
    position: w.style.transform,
  }));
}
