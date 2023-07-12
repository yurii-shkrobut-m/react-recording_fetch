import React, { useState } from 'react';

import usersFromServer from './api/users.json';

import { UsersList } from './components/UserList';
import { User } from './types';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(usersFromServer);

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        <UsersList users={users} />
      </div>
    </div>
  );
};
