import PropTypes from 'prop-types';
import { FreindItem, FreindsList, Status, Image, Text } from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <FreindsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FreindItem key={id}>
          <Status isOnline={isOnline}></Status>
          <Image src={avatar} alt={name} width="48" />
          <Text>{name}</Text>
        </FreindItem>
      ))}
    </FreindsList>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
