import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';
import {
  OS_MIN_WINDOW_WIDTH,
  HOMEPAGE_SPEECH_BUBBLE_MIN_WINDOW_WIDTH as W_CONSTRAINT,
} from '../../utils/constants';
import HomepageDialogue from './dialogue/Dialogue';

export const HomepageCTA = () => {
  const { width: windowWidth } = useWindowSize();
  const router = useRouter();
  const isLargeScreen = windowWidth > W_CONSTRAINT;

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        height={{ base: '100vh', md: 'calc(100vh - 64px)' }}
      >
        <Flex
          flex="0.5"
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box rounded="full" boxShadow="2xl">
            <Image src="/images/avatar_circle.png" width={300} height={300} />
          </Box>
        </Flex>
        {isLargeScreen ? (
          <HomepageDialogue />
        ) : (
          <Stack flex={1} spacing={{ base: 5, md: 10 }} position="relative">
            <Heading lineHeight={1.1} fontWeight={600}>
              <Text
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                textAlign={{
                  base: 'center',
                  md: 'left',
                  lg: 'left',
                  xl: 'left',
                }}
                mb={2}
              >
                I'm Double Debug,
              </Text>
              <Text
                fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
                textAlign={{
                  base: 'center',
                  md: 'left',
                  lg: 'left',
                  xl: 'left',
                }}
                color={'blue.300'}
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
              Feel free to browse through my past projects and read about my
              work and education. <br /> In case you need a beautiful, well
              designed and fully responsive website like this one, contact me
              and let's talk.
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
        )}
      </Stack>
    </Container>
  );
};
