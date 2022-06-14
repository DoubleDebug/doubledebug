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

export const HomepageCTA = () => {
  const router = useRouter();

  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
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
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text mb={3}>Dušan Dodić,</Text>
            <Text as={'span'} color={'blue.300'}>
              a full stack web developer.
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Hi! I'm Dušan and I've been learning web development for 2 years and
            programming for 10 years. <br />
            Need a beautiful, well designed and fully responsive website like
            this one? Contact me!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              size={'lg'}
              px={6}
              colorScheme={'blue'}
              onClick={() => router.push('/projects/explore')}
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
