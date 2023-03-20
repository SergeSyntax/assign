export const getUserLetter = (email: string, name?: string) => {
  if (name) {
    const [firstName, lastName] = name.trim().split(/\s/i);
    const firstLatter = firstName.charAt(0);
    const secondLetter = lastName.charAt(0);
    const letter = `${firstLatter}${secondLetter}`;
    return letter.toUpperCase();
  }

  return email.trimStart().charAt(0).toUpperCase();
};
