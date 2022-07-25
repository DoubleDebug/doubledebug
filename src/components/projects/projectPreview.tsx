import css from '../../styles/HomepageProject.module.css';
import {
  Text,
  HStack,
  Tag,
  Heading,
  Box,
  Link,
  Image,
  Button,
  useColorModeValue,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

const ProjectPreview: React.FC<{ data: Project }> = (props) => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');
  const router = useRouter();
  return (
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
      justifyContent="space-between"
      mb={16}
    >
      <Box
        display="flex"
        flex="1"
        marginRight={{ base: undefined, md: 8, lg: 0 }}
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: '100%', lg: '90%' }}
          zIndex="2"
          display="flex"
          justifyContent={isMobile ? 'center' : undefined}
          mb={isMobile ? 4 : undefined}
        >
          {props.data.urls.previewImages.length > 0 && (
            <Link
              href={`/projects/${props.data.id}`}
              overflow="hidden"
              borderRadius="lg"
              mx="auto"
            >
              <Image
                src={props.data.urls.previewImages[0]}
                alt="Project frontpage screenshot"
                objectFit="contain"
                maxHeight={400}
                transition="transform 0.5s ease"
                _hover={{
                  transform: 'scale(1.02)',
                }}
              />
            </Link>
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}
        textAlign={isMobile ? 'center' : undefined}
      >
        <Heading marginBottom={4}>
          <Link
            href={`/projects/${props.data.id}`}
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            {props.data.title}
          </Link>
        </Heading>
        <HStack spacing={2} rowGap={2} className={isMobile ? css.tags : ''}>
          {props.data.technologies.map((tech) => {
            return (
              <Tag
                size={'md'}
                variant="solid"
                colorScheme="blue"
                key={`project-tag-${tech}`}
              >
                {tech}
              </Tag>
            );
          })}
        </HStack>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
        >
          {props.data.description}
        </Text>
        <Stack spacing={4} direction={{ base: 'column', lg: 'row' }} mt={4}>
          <Button
            variant="solid"
            display="flex"
            alignItems="center"
            columnGap="0.5rem"
            borderColor="gray.500"
            colorScheme="blue"
            px={16}
            onClick={() => router.push(`/projects/${props.data.id}`)}
          >
            Read more
          </Button>
          {props.data.urls.liveDemo && (
            <Button
              variant="outline"
              display={{ base: 'none', md: 'flex', lg: 'flex' }}
              alignItems="center"
              columnGap="0.5rem"
              borderColor="gray.500"
              onClick={() => window.open(props.data.urls.liveDemo)}
            >
              <FontAwesomeIcon icon={faExternalLink} />
              Live demo
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectPreview;
