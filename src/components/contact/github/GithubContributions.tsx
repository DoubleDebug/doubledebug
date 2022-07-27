import css from '../../../styles/GithubContributions.module.css';
import {
  Box,
  Text,
  Flex,
  Grid,
  Tooltip,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { formatColor, formatTooltip } from './GithubContributionsActions';
import { SOCIAL_LINKS } from '../../../utils/constants/misc';
import {
  gitMonths,
  gitDays,
  gitColors,
} from '../../../utils/constants/GithubContributionsData';

interface IGithubContributionsProps {
  data: GithubContributionsData;
}

export const GithubContributions: React.FC<IGithubContributionsProps> = ({
  data,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Grid maxW="100%">
      <Text textAlign="left" mb={2}>
        <Text as="span" fontWeight="bold">
          {data.totalContributions}
        </Text>{' '}
        contributions this year
      </Text>
      <Grid
        p={2}
        columnGap={1}
        rowGap={2}
        borderRadius={8}
        border={'1px solid'}
        borderColor={'chakra-border-color'}
        boxShadow="2xl"
        width="100%"
        overflowX="scroll"
        gridTemplateRows="auto auto auto"
        gridTemplateColumns="45px auto"
        className={css.container}
      >
        <div />
        <Flex justify="space-around">
          {gitMonths.map((m, index) => (
            <Text key={`github-month-${index}`} fontSize="xs">
              {m}
            </Text>
          ))}
        </Flex>
        <Flex flexDirection="column" justify="space-between" mr={3}>
          {gitDays.map((d, index) => (
            <Text key={`github-day-${index}`} fontSize="xs">
              {d}
            </Text>
          ))}
        </Flex>
        <Flex columnGap={1}>
          {data.weeks.map((week, weekIndex) => (
            <Grid
              key={`column-${weekIndex}`}
              gridTemplateColumns="min-content"
              gap={1}
            >
              {week.contributionDays.map((day) => (
                <Tooltip
                  key={`cell-${weekIndex}-${day.weekday}`}
                  label={formatTooltip(day)}
                  placement="top"
                >
                  <Box
                    bgColor={
                      colorMode === 'light'
                        ? formatColor(day.contributionCount).light
                        : formatColor(day.contributionCount).dark
                    }
                    borderRadius={2}
                    width="10px"
                    height="10px"
                  />
                </Tooltip>
              ))}
            </Grid>
          ))}
        </Flex>
        <div />
        <Flex my={2} justifyContent="space-between" alignItems="center">
          <Link
            href={`${SOCIAL_LINKS.github}?tab=overview&from=2022-07-01&to=2022-07-16`}
            isExternal
            fontSize="xs"
          >
            View on GitHub
          </Link>
          <Flex columnGap={1} alignItems="center">
            <Text fontSize="xs">Less</Text>
            {[0, 1, 2, 3, 4].map((number) => (
              <Box
                key={`github-example-color-${number}`}
                bgColor={
                  colorMode === 'light'
                    ? gitColors.get(number)?.light
                    : gitColors.get(number)?.dark
                }
                borderRadius={2}
                width="10px"
                height="10px"
              />
            ))}
            <Text fontSize="xs">More</Text>
          </Flex>
        </Flex>
      </Grid>
    </Grid>
  );
};
