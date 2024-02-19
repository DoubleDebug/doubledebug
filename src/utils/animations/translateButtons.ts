import { SIDEBAR_WIDTH } from '../constants/navigation';

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
    counter += step;
    if (counter === destination) {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(update, 8);
}
