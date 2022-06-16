export function playPopoutAnimation(
  element: HTMLDivElement | undefined,
  duration: number = 300
) {
  if (!element) return;

  const interval = 4;
  const increment = (interval * 100) / duration;
  let counter = 100;

  const update = () => {
    updateOpacity(element, counter);
    updateTransform(element, counter);

    counter -= increment;

    if (counter <= 0) {
      updateOpacity(element, 0);
      updateTransform(element, 0);

      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(update, interval);
}

function updateOpacity(element: HTMLDivElement, counter: number) {
  element.style.opacity = `${counter}%`;
}

function updateTransform(element: HTMLDivElement, counter: number) {
  if (element.style.transform === '') {
    element.style.transform = `scale(${counter / 100})`;
  } else {
    const startingIndex = element.style.transform.indexOf('scale');
    if (startingIndex === -1) {
      element.style.transform += ` scale(${counter / 100})`;
    } else {
      element.style.transform = element.style.transform.replace(
        /scale\(.*?\)/gm,
        `scale(${counter / 100})`
      );
    }
  }
}
