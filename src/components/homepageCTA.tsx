import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  IconButton,
} from '@chakra-ui/react';

export const HomepageCTA = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Dušan Dodić,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              a full stack web developer.
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Hi! I'm Dušan and I've been learning web development for 2 years and
            programming for 10 years. <br />
            Need a beautiful, well designed and fully responsive website like
            this one? Contact me!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
            >
              Get started
            </Button>
            <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex="0.5"
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
