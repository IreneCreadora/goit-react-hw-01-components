import { Profile } from 'components/Profile/Profile';
// import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory';

import user from '../received/user';
// import data from '../received/data';
// import friends from '../received/friends';
// import transactions from '../received/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}
      {/* <FriendList></FriendList>
      <TransactionHistory></TransactionHistory> */}
    </>
  );
};
