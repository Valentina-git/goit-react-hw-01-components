import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import WrapperFriendList from './styledFriendList';

const FriendList = ({ friends }) => {
  return (
    <WrapperFriendList>
      <ul className="friend-list list">
        {friends.map((friend, ind) => (
          <FriendListItem {...friend} key={ind} />
        ))}
      </ul>
    </WrapperFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
