import { SIDEBAR_WIDTH } from '../constants/navigation';

export function playExpandAnimation(element: HTMLDivElement | undefined) {
  if (!element) return;

  const initialWidth = Number(
    element.style.width.replace('px', '') || element.clientWidth
  );
  const step = 4;
  let counter = 20;

  const update = () => {
    element.style.width = `${initialWidth + counter}px`;

    counter += step;
    if (counter === SIDEBAR_WIDTH + 20) {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(update, 8);
}
