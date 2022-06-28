import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode, useEffect, useRef } from 'react';

interface IFadeInOutProps extends BoxProps {
  duration?: number;
  delay: number;
  children?: ReactNode;
}

const FadeInOut: React.FC<IFadeInOutProps> = (props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!elementRef.current) return;
      elementRef.current.style.opacity = '100%';
    }, props.delay);

    return () => {
      if (!elementRef.current) return;
      elementRef.current.style.opacity = '0%';
    };
  }, []);

  return (
    <Box
      {...props}
      transition={`opacity ${props.duration ? props.duration : 1000}ms ease`}
      opacity={0}
      ref={elementRef}
    >
      {props.children}
    </Box>
  );
};

export default FadeInOut;
