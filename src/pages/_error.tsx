import {
  Text,
  Flex,
  Grid,
  Heading,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Error = ({ statusCode }: { statusCode: number }) => {
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
            {statusCode}
          </Heading>
          <Text fontSize="2em" mt={3} mb={2}>
            {statusCode === 404 ? `Page Not Found` : `There was an error`}
          </Text>
          <Text color={'gray.500'} mb={6}>
            {statusCode === 404
              ? `The page you're looking for does not seem to exist.`
              : `The requested page failed to load.`}
          </Text>

          <Button
            colorScheme="blue"
            variant="solid"
            justifySelf="center"
            px={8}
            onClick={() => router.push('/')}
          >
            Go home
          </Button>
        </Grid>
      </Flex>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
