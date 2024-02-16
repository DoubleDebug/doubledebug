import Head from 'next/head';
import { FC, useMemo } from 'react';
import styles from '../../../styles/rwilt.module.css';
import { GoHeartFill as HeartIcon } from 'react-icons/go';
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Flex,
  useColorModeValue,
  Box,
  useMediaQuery,
} from '@chakra-ui/react';
import { ReasonCard } from '../../../components/blog/rwilt/ReasonCard';
import { reasons } from '../../../components/blog/rwilt/Reasons';

const HeroSection: FC = () => {
  const [isXsScreen] = useMediaQuery('(max-width: 460px)');
  const [isSmScreen] = useMediaQuery('(max-width: 612px)');
  const [isMdScreen] = useMediaQuery('(max-width: 805px)');
  const breadcrumbColor = useColorModeValue('gray.800', 'gray.400');
  const titleSize = useMemo(() => {
    if (isXsScreen) return '60px';
    if (isSmScreen) return '80px';
    if (isMdScreen) return '90px';
    return '120px';
  }, [isXsScreen, isSmScreen, isMdScreen]);

  return (
    <>
      <Head>
        <title>10 Reasons why I love Typescript | Double Debug</title>
        <meta
          name="description"
          content="Reasons why I love typescript - Web developer portfolio website"
        />
      </Head>
      <Container
        maxW={{ base: 'initial', md: '7xl' }}
        p={{ base: 4, md: 12 }}
        pt={8}
      >
        <Flex color={breadcrumbColor}>
          <Breadcrumb
            fontWeight="medium"
            fontSize="lg"
            color={breadcrumbColor}
            mb={4}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <span>10 reasons I love Typescript</span>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
        <div className={styles.container} style={{ marginBottom: titleSize }}>
          <Heading className={styles.heading}>
            <title className={styles.title} style={{ fontSize: titleSize }}>
              10 reasons
            </title>
            <div
              className={styles.subtitle}
              style={isSmScreen ? { right: 0, transform: 'rotate(0deg)' } : {}}
            >
              <span className={styles.subtitle1}>I</span>
              <HeartIcon color="#f46565" />
              <span className={styles.subtitle2}>TypeScript</span>
            </div>
          </Heading>
        </div>
        <Box
          display={'grid'}
          gridTemplateColumns={isMdScreen ? 'auto' : 'auto auto auto'}
          marginTop={isXsScreen ? '100px' : ''}
          gap={'15px'}
        >
          <Box display="grid" height="min-content" gap="15px">
            <ReasonCard flex={1} data={reasons[0]} />
          </Box>
          <Box display="grid" height="min-content" gap="15px">
            <ReasonCard flex={1} data={reasons[1]} />
          </Box>
          <Box display="grid" height="min-content" gap="15px">
            <ReasonCard flex={1} data={reasons[2]} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeroSection;
