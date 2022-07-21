import { keyframes } from '@chakra-ui/react';

export const contactStyles = {
  size: '96px',
  color: 'green',
  pulseRing: keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`,
};
