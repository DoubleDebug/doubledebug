import {
  Text,
  Flex,
  Grid,
  Heading,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Custom404Page = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Error | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <Flex justifyContent="center" alignItems="center" height="80vh">
        <Grid textAlign="center">
          <Heading
            display="inline-block"
            as="h2"
            size="4xl"
            color={colorMode === 'light' ? 'blue.400' : 'blue.200'}
          >
            404
          </Heading>
          <Text fontSize="2em" mt={3} mb={2}>
            Page Not Found
          </Text>
          <Text color={'gray.500'} mb={6}>
            The page you're looking for does not seem to exist.
          </Text>

          <Button
            colorScheme="blue"
            variant="solid"
            justifySelf="center"
            px={8}
            onClick={() => router.push('/')}
          >
            Oh well...
          </Button>
        </Grid>
      </Flex>
    </>
  );
};

export default Custom404Page;
