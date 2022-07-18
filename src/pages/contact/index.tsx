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
} from '@chakra-ui/react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { ContactForm } from '../../components/contact/contactForm';
import { getGithubContributions } from '../../components/contact/github/GithubContributionsActions';
import { contactStyles } from './styles';
import { GithubContributions } from '../../components/contact/github/GithubContributions';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // cache github data for 1 day (86400 seconds)
  res.setHeader('Cache-Control', 'public, s-maxage=86400');

  // fetch github contributions
  const githubData = await getGithubContributions(
    process.env.GITHUB_ACCESS_TOKEN || ''
  );

  return {
    props: {
      data: githubData.data.user.contributionsCollection.contributionCalendar,
    },
  };
};

interface IContactPageProps {
  data: GithubContributionsData;
}

const ContactPage: React.FC<IContactPageProps> = ({ data: githubData }) => {
  return (
    <>
      <Head>
        <title>Contact | Double Debug</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <ContactForm>
        <Container maxW={'3xl'}>
          <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 4 }}>
            <Heading size="2xl" textAlign={{ base: 'center', md: 'left' }}>
              Let's talk
            </Heading>
            <Text
              textAlign={{ base: 'center', md: 'left' }}
              color={'gray.500'}
              mt="1rem !important"
            >
              Send me a message and I'll get back to you as soon as possible.
            </Text>
          </Stack>
        </Container>
      </ContactForm>

      <Container maxW={'3xl'} mb={16}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 4 }}>
          <Heading size="2xl" textAlign={{ base: 'center', md: 'left' }}>
            My activity
          </Heading>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            color={'gray.500'}
            my="1rem !important"
          >
            Best way to find out how active I am is through my GitHub
            contributions.
          </Text>
          <Flex
            w="full"
            columnGap={8}
            alignItems="center"
            justify={{ base: 'center', md: 'left' }}
          >
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
                  left={0}
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
              borderColor={'chakra-border-color'}
              rounded={'lg'}
              height="min-content"
            >
              <StatLabel fontWeight={'medium'}>Average response time</StatLabel>
              <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                ~ 8 hours
              </StatNumber>
            </Stat>
          </Flex>
          <Box mt="3rem !important">
            <GithubContributions data={githubData} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ContactPage;
