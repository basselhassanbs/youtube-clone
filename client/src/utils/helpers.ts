const colors = [
  `#5A47E8`,
  `#0FB57C`,
  `#E84774`,
  `#FD5EAE`,
  `#0AA5A6`,
  `#358B6D`,
  `#E86C47`,
  `#E84747`,
  `#B647E8`,
];

export const getInitials = (fullname: string) => {
  const words = fullname
    .replace(/[^a-z ]/gi, ``)
    .trim()
    .split(` `);
  switch (words.length) {
    case 0:
      return ``;
    case 1:
      return words[0].substring(0, 1).toUpperCase();
    default:
      return `${words[0].substring(0, 1).toUpperCase()}${words[words.length - 1]
        .substring(0, 1)
        .toUpperCase()}`;
  }
};

export const generateColor = (name: string, initials: string) => {
  let iValue = initials.charCodeAt(0) - 65;
  if (initials.length === 2) {
    iValue += initials.charCodeAt(1) - 65;
    iValue /= 2;
  }
  const col = Math.floor((iValue * 8) / 28);
  return colors[col];
};
