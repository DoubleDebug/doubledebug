import { SIDEBAR_WIDTH } from '../constants';

export function playTranslateButtonsAnimation(
  element: HTMLDivElement | null,
  direction: 'left' | 'right'
) {
  if (!element) return;

  const step = 4;
  const destination = direction === 'left' ? SIDEBAR_WIDTH + 20 : 0;
  let counter = direction === 'left' ? 0 : -SIDEBAR_WIDTH;

  const update = () => {
    element.style.transform = `translateX(${
      direction === 'left' ? '-' : ''
    }${counter}px)`;
    console.log(element.style.transform);
    counter += step;
    if (counter === destination) {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(update, 8);
}
