import { SIDEBAR_WIDTH } from '../constants/navigation';

export function playCompressAnimation(element: HTMLDivElement | undefined) {
  if (!element) return;

  const initialWidth = Number(element.style.width.replace('px', ''));
  const step = 4;
  let counter = 0;

  const update = () => {
    element.style.width = `${initialWidth - counter}px`;

    counter += step;
    if (counter === SIDEBAR_WIDTH + 20) {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(update, 8);
}
