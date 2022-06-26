import {
  Text,
  Stack,
  Heading,
  Button,
  Image as ImageChakra,
} from '@chakra-ui/react';
import router from 'next/router';
import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { OS_MIN_WINDOW_WIDTH } from '../../../utils/constants';

const HomepageDialogue: React.FC = () => {
  const { width: windowWidth } = useWindowSize();
  const [dialogStage, setDialogStage] = useState<1 | 2 | 3>(1);

  return (
    <Stack flex={1} spacing={{ base: 5, md: 10 }} position="relative">
      <ImageChakra
        src="/images/speech_bubble.png"
        alt="Speech bubble"
        width={900}
        height={500}
        position="absolute"
        left={-100}
        top={-150}
        zIndex={-10}
      />
      <Heading lineHeight={1.1} fontWeight={600} pb={36} pl={10}>
        <Text
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
          mb={2}
          color="black"
        >
          I'm Double Debug,
        </Text>
        <Text
          fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
          textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
          color={'blue.300'}
          pl={20}
        >
          a full stack web developer.
        </Text>
      </Heading>
      <Text
        color={'gray.500'}
        textAlign={{ sm: 'center', md: 'left', lg: 'left' }}
        fontSize="lg"
        fontFamily="Mosk"
      >
        Feel free to browse through my past projects and read about my work and
        education. <br /> In case you need a beautiful, well designed and fully
        responsive website like this one, contact me and let's talk.
      </Text>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', lg: 'row' }}
      >
        <Button
          size={'lg'}
          px={6}
          colorScheme={'blue'}
          onClick={() => {
            if (windowWidth <= OS_MIN_WINDOW_WIDTH) {
              router.push('/projects');
            } else {
              router.push('/projects/explore');
            }
          }}
        >
          Explore projects
        </Button>
        <Button
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          onClick={() =>
            window.scrollTo({
              top: 5000,
            })
          }
        >
          Hire me
        </Button>
      </Stack>
    </Stack>
  );
};

export default HomepageDialogue;
