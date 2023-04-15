import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Desc,
  Label,
  Name,
  Quantity,
  StatItem,
  Stats,
  Tag,
  Location,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Desc>
        <Avatar src={avatar} alt={username} width="150" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Desc>

      <Stats>
        <StatItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
