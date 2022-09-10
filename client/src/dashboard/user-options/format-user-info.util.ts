import { Profile_profile } from './__generated__/Profile';

const INITIAL_DATA = { name: 'unknown', email: 'user@domain.com' };

export const formatUserInfo = (user?: Profile_profile | null) => {
  const { name, email } = user ?? INITIAL_DATA;

  if (name && name !== 'unknown') {
    const secondLetter = /\s[a-z]/i.exec(name);
    const firstLetter = name[0];
    const letter = secondLetter ? `${firstLetter}${secondLetter[0][1]}` : firstLetter;
    return { name, letter };
  } else {
    const name = (email ?? INITIAL_DATA.email).split('@')[0];
    const letter = name[0].toUpperCase();

    return { name, letter };
  }
};
