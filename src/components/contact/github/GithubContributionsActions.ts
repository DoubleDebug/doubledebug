import { gitColors } from '../../../utils/constants/GithubContributionsData';

export async function getGithubContributions(accessToken: string) {
  const headers = {
    Authorization: `bearer ${accessToken}`,
  };
  const body = {
    query: `query {
            user(login: "doubledebug") {
              name
              contributionsCollection(from: "${new Date().getFullYear()}-01-01T00:00:00.000+00:00", to: "${new Date().getFullYear()}-12-31T00:00:00.000+00:00") {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      weekday
                      date
                      color
                    }
                  }
                }
              }
            }
          }`,
  };

  const response = await fetch(`https://api.github.com/graphql`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });
  return await response.json();
}

export function formatTooltip(day: {
  contributionCount: number;
  weekday: number;
  date: string;
  color: string;
}) {
  return `${day.contributionCount} contributions on ${new Date(
    day.date
  ).toLocaleDateString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}`;
}

export function formatColor(contributionCount: number) {
  const level =
    contributionCount === 0
      ? 0
      : contributionCount === 1
      ? 1
      : contributionCount === 2 || contributionCount === 3
      ? 2
      : contributionCount === 4 || contributionCount === 5
      ? 3
      : 4;
  return gitColors.get(level)!;
}
