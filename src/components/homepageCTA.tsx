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
import { OS_MIN_WINDOW_SIZE } from '../utils/constants';

export const HomepageCTA = () => {
  const { width: windowWidth } = useWindowSize();
  const router = useRouter();

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        mt={{ base: 0, md: 32 }}
        mb={{ base: 0, md: 32 }}
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
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text
              fontSize={{ base: '3xl', sm: '4xl', lg: '7xl' }}
              textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
              mb={3}
            >
              I'm Double Debug,
            </Text>
            <Text
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
              color={'blue.300'}
            >
              a full stack web developer.
            </Text>
          </Heading>
          <Text
            color={'gray.500'}
            textAlign={{ sm: 'center', md: 'left', lg: 'left' }}
          >
            Hi! My name is Dušan Dodić and I'm a 24 year old student from
            Serbia. <br />
            Feel free to browse through my past projects and read about my work
            and education. <br /> In case you need a beautiful, well designed
            and fully responsive website like this one, contact me and let's
            talk.
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
                if (windowWidth <= OS_MIN_WINDOW_SIZE) {
                  router.push('/projects');
                } else {
                  router.push('/projects/explore');
                }
              }}
            >
              Explore projects
            </Button>
            <Button size={'lg'} fontWeight={'normal'} px={6}>
              Hire me
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
