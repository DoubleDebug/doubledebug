import { Badge, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SIDEBAR_WIDTH } from '../../utils/constants/misc';

interface IOSWindowSidebarProps {
  data: Project;
}

const OSWindowSidebar: React.FC<IOSWindowSidebarProps> = (props) => {
  return (
    <Grid width={SIDEBAR_WIDTH}>
      <Grid height="min-content">
        <Text
          color={'blue.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'xs'}
          letterSpacing={1.1}
        >
          project info
        </Text>
        <Heading fontSize={'3xl'} mb={2}>
          {props.data.title}
        </Heading>
        <Flex columnGap={2} rowGap={2} mb={4} flexWrap="wrap">
          {props.data.technologies.map((tech) => (
            <Badge
              rounded="full"
              px="2"
              fontSize="0.8em"
              colorScheme="blue"
              key={`project-badge-${tech}`}
            >
              {tech}
            </Badge>
          ))}
        </Flex>
        <Text mb={4}>{props.data.description}</Text>
      </Grid>
      <Grid height="min-content" mt="auto" rowGap={2}>
        <Button
          variant="solid"
          colorScheme="blue"
          display="flex"
          alignItems="center"
          columnGap="0.5rem"
          title={props.data.urls.liveDemo}
          onClick={() => window.open(props.data.urls.liveDemo)}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          Visit site
        </Button>
        <Button
          variant="outline"
          display="flex"
          alignItems="center"
          columnGap="0.5rem"
          borderColor="gray.500"
          onClick={() => window.open(`/projects/${props.data.id}`)}
        >
          Read more
        </Button>
      </Grid>
    </Grid>
  );
};

export default OSWindowSidebar;
