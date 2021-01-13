import React from 'react';
import PropTypes from 'prop-types';
import Li from './styledFriendListItem';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Li className="item">
      <span
        className={`status ${isOnline ? 'statusGreen' : 'statusRed'}`}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="60" />
      <p className="name">{name}</p>
    </Li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
