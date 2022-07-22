import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  useDisclosure,
  IconButton,
  useMediaQuery,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';
import {
  NAVIGATION_ITEMS,
  OS_MIN_WINDOW_WIDTH,
} from '../../utils/constants/misc';

const NavLink = (props: { children: ReactNode; link: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.300', 'gray.600'),
    }}
    href={props.link}
  >
    {props.children}
  </Link>
);

const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width: windowWidth } = useWindowSize();
  const [isScreenBigEnough] = useMediaQuery('(min-width: 300px)');

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Link
            display={{ base: 'none', md: 'flex', sm: 'none' }}
            alignItems="center"
            cursor="pointer"
            href="/"
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Image
              alt="DoubleDebug logo"
              src={
                colorMode === 'light'
                  ? 'https://i.imgur.com/oEyQiC5.png'
                  : 'https://i.imgur.com/zq2wx0n.png'
              }
              width={50}
              height={50}
            />
          </Link>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {NAVIGATION_ITEMS.map((navDataItem) => (
              <NavLink key={navDataItem.url} link={navDataItem.url}>
                {navDataItem.title}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button
            variant="solid"
            mr={isScreenBigEnough ? 4 : 0}
            colorScheme="blue"
            onClick={() => {
              if (windowWidth <= OS_MIN_WINDOW_WIDTH) {
                router.push('/projects');
              } else {
                router.push('/projects/explore');
              }
            }}
          >
            Explore projects
          </Button>
          {isScreenBigEnough && (
            <Stack direction={'row'} spacing={7}>
              <Button
                title={colorMode === 'light' ? 'Light theme' : 'Dark theme'}
                bgColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
                onClick={toggleColorMode}
                _hover={{
                  bgColor: colorMode === 'light' ? 'gray.300' : 'gray.600',
                }}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {NAVIGATION_ITEMS.map((navDataItem) => (
              <NavLink key={navDataItem.url} link={navDataItem.url}>
                {navDataItem.title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
