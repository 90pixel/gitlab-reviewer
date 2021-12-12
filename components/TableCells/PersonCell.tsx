import { FC } from 'react';
import { Avatar } from 'antd';
import { styled } from 'stitches.config';
import { User } from 'types/USER';

interface IPerson {
  person: User;
}

const PersonCell: FC<IPerson> = ({ person }) => {
  return (
    <div>
      <Avatar src={person.avatar_url}>{person.name}</Avatar>
      <UserName>{person.name}</UserName>
    </div>
  );
};

export default PersonCell;

const UserName = styled('span', {
  marginLeft: 10,
});
