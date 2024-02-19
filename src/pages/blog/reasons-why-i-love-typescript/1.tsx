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
          content="Reasons why I love typescript - Web developer portfolio website"
        />
      </Head>
      <Container maxW={'7xl'}>
        <Stack py={{ base: 16, md: 24 }}>
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
                <span>Reason 1</span>
              </BreadcrumbItem>
            </Breadcrumb>
          )}
          <Stack direction={{ base: 'column', md: 'row' }} gap={10}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading lineHeight={1.2} fontWeight={600} fontSize="5xl">
                <Text as={'span'}>Reason #1 why I love Typescript:</Text>
                <Text color={'red.400'}>The Intellisense</Text>
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
                        Javascript is a weakly typed programming language. This
                        means that there's no way to know the exact type of a
                        variable before your code runs. Let's take a look at the
                        following example:
                      </Text>
                      <Markdown
                        content={`~~~js
function formatName(user) {
  return \`\${user.name}, \${user.age}\`;
}
`}
                      />
                      <Text>
                        Here we relying on the fact that the "user" parameter is
                        an object that contains the "name" and "age" properties.
                        We're trusting the user of this function to pass the
                        correctly typed parameter.
                      </Text>
                      <br />
                      <Text>
                        In the real world, the data passed to this function can
                        come from various sources:
                      </Text>
                      <Markdown
                        content={`
- an external API
- user input
- your own code
`}
                      />
                      <br />
                      <Text>
                        The shocking truth is that you can also be the source of
                        an error 😱. So...
                      </Text>
                      <Markdown
                        content={`~~~ts
type User = {
  name: string;
  age: number;
}

function formatName(user: User) {
  return \`\${user.name}, \${user.age}\`;
}
`}
                      />
                      <Text>
                        In the Typescript example, we set the conditions that
                        need to be met by the "user" parameter. We're ensuring
                        that it's safe to assume the user has a "name" and
                        "age", and we also get the sweet-sweet intellisense!
                      </Text>
                      <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
                      <Text>
                        💡 Some might say that we can still pass any paramter to
                        this function, as long as we cast the type to "any".
                        This is true, but at that point, the developer has
                        already been warned and is now taking the responsibility
                        of explicitly casting the parameter type.
                        <br />
                        <br />
                        At that point, it's the developer's fault. 🤷
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <iframe
                      width="100%"
                      height="300"
                      src="//jsfiddle.net/doubledebug/7kj2s4fg/1/embedded/js,result/dark/"
                    ></iframe>
                    <iframe
                      width="100%"
                      height="350"
                      src="//jsfiddle.net/doubledebug/5nhkvb20/25/embedded/js,result/dark/"
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
            <Box display="flex" justifyContent="center">
              <RwiltSocialMediaStack
                youtubeLink="https://www.youtube.com/shorts/3XK8hWcM2ak"
                tiktokLink="https://www.tiktok.com/@imdoubled/video/7336602385189555461"
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ReasonOne;
