import React from 'react';
import data from '../data/data';
import FriendList from './friend/FriendList';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transactions/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile {...data.user} />
      <Statistics title="Upload stats" stats={data.statisticalData} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </>
  );
};

export default App;
