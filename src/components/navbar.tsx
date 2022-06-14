import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link display="flex" alignItems="center" cursor="pointer" href="/">
          <Image
            src={
              colorMode === 'light'
                ? '/images/avatar_light.png'
                : '/images/avatar_dark.png'
            }
            width={50}
            height={50}
          />
        </Link>

        <Flex alignItems={'center'}>
          <Button
            variant="solid"
            mr={4}
            colorScheme="blue"
            onClick={() => router.push('/projects/explore')}
          >
            Explore projects
          </Button>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;