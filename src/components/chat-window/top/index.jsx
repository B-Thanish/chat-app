/* eslint-disable react/function-component-definition */
import React, { memo } from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const Top = () => {
  const name = useCurrentRoom(v => v.name);

  return <div>{name}</div>;
};

export default memo(Top);
