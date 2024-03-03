import Head from 'next/head';
import {
  Container,
  Stack,
  Heading,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useMediaQuery,
} from '@chakra-ui/react';
import { RwiltSocialMediaStack } from '../../../components/blog/rwilt/RwiltSocialMediaStack';
import { Markdown } from '../../../components/blog/Markdown';

const ReasonOne: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 420px)');
  const breadcrumbColor = useColorModeValue('gray.800', 'gray.400');
  return (
    <>
      <Head>
        <title>10 Reasons why I love Typescript | Double Debug</title>
        <meta
          name="description"
          content="Reasons why I love typescript | Web developer blog"
        />
      </Head>
      <Container maxW={'7xl'}>
        <Stack py={{ base: 4, md: 12 }}>
          {!isMobile && (
            <Breadcrumb
              fontWeight="medium"
              fontSize="lg"
              color={breadcrumbColor}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog/reasons-why-i-love-typescript">
                  10 reasons I love Typescript
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <span>#3</span>
              </BreadcrumbItem>
            </Breadcrumb>
          )}
          <Stack direction={{ base: 'column', md: 'row' }} gap={10}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading lineHeight={1.2} fontWeight={600} fontSize="5xl">
                <Text as={'span'}>Reason #3 why I love Typescript:</Text>
                <Text color={'red.400'}>Type indexing</Text>
              </Heading>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Summary</Tab>
                  <Tab>Playground</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Box
                      fontSize="1.1rem"
                      fontWeight={400}
                      sx={{
                        '& pre > div': { padding: '0 !important' },
                        '& li': { fontSize: '1.1rem' },
                      }}
                    >
                      <Text>
                        One of the key principles when writing code is DRY -{' '}
                        <u>Don&apos;t Repeat Yourself</u>.
                      </Text>
                      <br />
                      <Text>
                        In Typescript, one of the ways I found myself applying
                        this principle is using type indexing.
                      </Text>
                      <Text>
                        Type indexing allows you to reference a piece of another
                        type.
                      </Text>
                      <br />
                      <Text>Let&apos;s take a look at an example:</Text>
                      <Markdown
                        content={`~~~ts
type User = {
  id: string;
  name: string;
  age: number;
}

function findUser(userId: string) { ... };
function getUserProfilePhoto(userId: string) { ... };
`}
                      />
                      <Text>
                        In this example, we have a User type.
                        <br />
                        We&apos;re also using a piece of that type (the user ID)
                        as an argument in the{' '}
                        <code style={{ fontStyle: 'italic' }}>
                          findUser
                        </code>{' '}
                        and{' '}
                        <code style={{ fontStyle: 'italic' }}>
                          getUserProfilePhoto
                        </code>{' '}
                        methods.
                      </Text>
                      <br />
                      <Text>
                        💡 The user ID is a string. <br />
                        But what happens if, in the future, for whatever reason,
                        I want to change it to a number?
                      </Text>
                      <br />
                      <Text>
                        I would have to update the type, but also find all
                        instances where the user ID is referenced. This is not
                        only a tidious job, but sometimes an impossible one.
                      </Text>
                      <br />
                      <Text>
                        Now, let&apos;s look at the same example, but with
                        ✨type indexing✨:
                      </Text>
                      <Markdown
                        content={`~~~ts
type User = {
  id: string;
  name: string;
  age: number;
}

function findUser(userId: User['id']) { ... };
function getUserProfilePhoto(userId: User['id']) { ... };
`}
                      />
                      <br />
                      <Text>
                        Here, If I ever decided to change the user ID type to a
                        number, all <code>userId</code> instances would be
                        automatically updated.
                        <br />
                        <br />
                        Not only that, but if there were any instances where the
                        ID is specifically treated as a string
                        <br />
                        (e.g.{' '}
                        <code style={{ fontStyle: 'italic' }}>
                          userId.toUppercase()
                        </code>
                        ), I would get a compile time error.
                      </Text>
                      <br />
                      <Text>
                        This would force me to decide how to handle this
                        situation, and it would avoid any future runtime errors.
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <iframe
                      src="https://codesandbox.io/embed/hh66sw?view=editor&module=%2Fsrc%2Findex.ts"
                      style={{
                        width: '100%',
                        height: '500px',
                        border: '0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                      title="RWILT #3"
                      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
            <Box display="flex" justifyContent="center">
              <RwiltSocialMediaStack
                youtubeLink="https://www.youtube.com/shorts/gbRGI92S_J0"
                tiktokLink="https://www.tiktok.com/@imdoubled/video/7340033972656753925"
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ReasonOne;
