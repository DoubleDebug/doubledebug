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
} from '@chakra-ui/react';
import { RwiltSocialMediaStack } from '../../../components/blog/rwilt/RwiltSocialMediaStack';
import { Markdown } from '../../../components/blog/Markdown';

const ReasonOne: React.FC = () => {
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
          <Breadcrumb fontWeight="medium" fontSize="lg" color={breadcrumbColor}>
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

                <TabPanels height="600px">
                  <TabPanel>
                    <Box fontSize="1.1rem" fontWeight={400}>
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
                        Relying on your editor's intellisense will not only
                        speed up the development, it will also ensure you're
                        writing safe code.
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <script
                      async
                      src="//jsfiddle.net/doubledebug/5nhkvb20/4/embed/js,result/dark/"
                    ></script>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
            <RwiltSocialMediaStack
              youtubeLink="https://www.youtube.com/shorts/3XK8hWcM2ak"
              tiktokLink="https://www.tiktok.com/@imdoubled/video/7336602385189555461"
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default ReasonOne;
