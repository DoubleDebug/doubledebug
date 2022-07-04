import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { ContactForm } from '../../components/contact/contactForm';
import { contactStyles } from './styles';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <ContactForm>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 4 }}
            ml={{ base: 0, md: 28 }}
          >
            <Heading size="2xl" textAlign={{ base: 'center', md: 'left' }}>
              Let's talk
            </Heading>
            <Text textAlign={{ base: 'center', md: 'left' }} color={'gray.500'}>
              Send me a message and I'll get back to you as soon as possible.
            </Text>
          </Stack>
        </Container>
      </ContactForm>

      <Flex maxW={400} mx="auto" mb={16} columnGap={8} alignItems="center">
        <Grid rowGap={2}>
          <Box
            as="div"
            position="relative"
            w={contactStyles.size}
            h={contactStyles.size}
            _before={{
              content: "''",
              position: 'relative',
              display: 'block',
              width: '300%',
              height: '300%',
              boxSizing: 'border-box',
              marginLeft: '-100%',
              marginTop: '-100%',
              borderRadius: '50%',
              bgColor: contactStyles.color,
              animation: `2.25s ${contactStyles.pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }}
          >
            <Avatar
              src="/images/avatar_circle_meh.png"
              size="full"
              position="absolute"
              top={0}
            />
          </Box>
          <Text textAlign="center" fontWeight={600}>
            Dušan
          </Text>
        </Grid>
        <Stat
          px={{ base: 4, md: 8 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.800', 'gray.500')}
          rounded={'lg'}
          height="min-content"
        >
          <StatLabel fontWeight={'medium'}>Average response time</StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            ~ 8 hours
          </StatNumber>
        </Stat>
      </Flex>
    </>
  );
};

export default ContactPage;
