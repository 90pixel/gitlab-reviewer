import { FC } from 'react';
import { Avatar, Tooltip } from 'antd';
import { styled } from 'stitches.config';
import { User } from 'types/USER';

interface IPerson {
  person: User;
}

const PersonCell: FC<IPerson> = ({ person }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Avatar src={person.avatar_url}>{person.name}</Avatar>
      <Tooltip title={person.name}>
        <UserName>{person.name.split(' ')[0]}</UserName>
      </Tooltip>
    </div>
  );
};

export default PersonCell;

const UserName = styled('span', {
  marginLeft: 10,
  whiteSpace: 'nowrap',
  cursor: 'default',
});
