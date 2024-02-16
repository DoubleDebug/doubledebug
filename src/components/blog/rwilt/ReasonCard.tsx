import { FC } from 'react';
import { RwiltReason } from './Reasons';
import {
  Box,
  Text,
  useColorModeValue,
  Stack,
  Heading,
  Image,
} from '@chakra-ui/react';

type Props = {
  flex: number;
  data: RwiltReason;
};

export const ReasonCard: FC<Props> = (props) => {
  return (
    <Box
      w={'full'}
      bg={useColorModeValue('gray.50', 'gray.700')}
      boxShadow={'2xl'}
      rounded={'md'}
      cursor={'pointer'}
      height={'min-content'}
      p={4}
      flex={props.flex}
      overflow={'hidden'}
      _hover={{
        bg: useColorModeValue('gray.100', '#262F3E'),
      }}
    >
      <Stack>
        {props.data.imageUrl && (
          <Image src={props.data.imageUrl} alt="VS Code screenshot" />
        )}
        <Box display="flex" justifyContent="space-between">
          <Text
            color={'#f46565'}
            textTransform={'uppercase'}
            fontWeight={600}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Reason #{props.data.order}
          </Text>
          <Text fontSize="sm" color={'gray.500'}>
            {props.data.duration}
          </Text>
        </Box>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {props.data.title}
        </Heading>
        <Text color={'gray.500'}>{props.data.summary}</Text>
      </Stack>
    </Box>
  );
};
