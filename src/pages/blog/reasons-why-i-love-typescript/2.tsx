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
                <span>Reason 2</span>
              </BreadcrumbItem>
            </Breadcrumb>
          )}
          <Stack direction={{ base: 'column', md: 'row' }} gap={10}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading lineHeight={1.2} fontWeight={600} fontSize="5xl">
                <Text as={'span'}>Reason #2 why I love Typescript:</Text>
                <Text color={'red.400'}>Global types</Text>
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
                        Did you know you can access Typescript types from other
                        files without importing them?
                      </Text>
                      <br />
                      <Text>
                        Besides the regular .ts files, the Typescript
                        programming language also has support for .d.ts files.
                      </Text>
                      <Text>
                        These are called DTS Modules, where D stands for{' '}
                        <strong>declaration</strong>.
                      </Text>
                      <br />
                      <Text>DTS files are used to:</Text>
                      <ul style={{ marginLeft: '2.5rem' }}>
                        <li>declare types</li>
                        <li>declare interfaces</li>
                        <li>declare function signatures</li>
                        <li>
                          give Typescript information about some Javascript API
                        </li>
                      </ul>
                      <br />
                      <Markdown
                        content={`~~~ts
type Circle = {
  radius: number;
  color: string;
}

function getCircleArea(circle: Circle): number;
function getCircleCirumference(circle: Circle): number;

const PI: number;
`}
                      />
                      <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
                      <Text>
                        💡 You can also find .d.ts files in NPM modules that
                        were initially written in Javascript. Instead of
                        re-writing these libraries in Typescript, the
                        maintaineres often write .d.ts files to provide
                        developers the information they need to know about their
                        API.
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <iframe
                      src="https://codesandbox.io/embed/9rzhqs?view=editor&module=%2Fsrc%2Fapp.tsx"
                      style={{
                        width: '100%',
                        height: '500px',
                        border: '0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                      title="RWILT #2 - Global types"
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
