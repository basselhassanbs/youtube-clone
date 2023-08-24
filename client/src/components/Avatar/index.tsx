import React from 'react';
import { useClasses } from './styles';
import { generateColor, getInitials } from '../../utils/helpers';

interface Props {
  imgUrl: string;
  name: string;
  width?: number;
  height?: number;
}

const Avatar = ({ imgUrl, name, width = 39, height = 39 }: Props) => {
  const initials = getInitials(name);
  const color = generateColor(name, initials);

  const classes = useClasses({ color, width, height });
  return imgUrl ? (
    <img src={imgUrl} className={classes.avatar} />
  ) : (
    <div className={classes.avatar}>{initials}</div>
  );
};

export default Avatar;
