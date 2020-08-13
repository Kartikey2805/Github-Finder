import React, { useContext } from 'react';
import UserItem from '../users/UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
const UserStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1Fr)',
  gridGap: '1rem',
};

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={UserStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
