import React from 'react';
import PropTypes from 'prop-types';
import WrapperProfile from './styledProfile';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <WrapperProfile>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt={name} className="avatar" width="250" />
          <p className="name">{name}</p>
          <p className="tag">&#64;{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats list">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </WrapperProfile>
  );
};

Profile.defaultProps = {
  name: 'user',
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
