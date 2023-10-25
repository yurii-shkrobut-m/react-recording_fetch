import React, { useState, useEffect } from 'react';
import { UsersList } from './components/UserList';
import { User } from './types';
import { getUsers } from './services/user';
import { Blocks } from 'react-loader-spinner';


export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        <UsersList users={users} />
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />

        <p className="title is-5">There are no users</p>
        <p className="notification is-danger">Try again later</p>
      </div>
    </div>
  );
};
