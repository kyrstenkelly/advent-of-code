import fetch from 'node-fetch';

// TODO: This cookie will surely change over time, replacing it here will be annoying.
// Move to env var or something easier.
const SESSION_COOKIE = '53616c7465645f5fa8e414fc866ef3c05b95fe0aedff908d14f47e59657502e0edc040c9809a09036fe07f52de879735';

export const getInput = (filename: string) => {
  const dateRegex = /.*\/(20[0-9]{2})\/([0-9]+).*/g
  const matches = dateRegex.exec(filename);
  const year = matches[1];
  const day = matches[2];

  return fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    method: 'get',
    headers: {
      'cookie': `session=${SESSION_COOKIE}`
    }
  }).then((response: Response) => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return response.text();
  }).then((response: string) => {
    const input = response.split('\n');
    // Filter out empty string at the end of input
    return input.filter(s => !!s);
  });
}
