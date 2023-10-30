import React, { useState, useEffect } from 'react';
import { UsersList } from './components/UserList';
import { User } from './types';
import { getUsers } from './services/user';
import { Blocks } from 'react-loader-spinner';

export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [updateAt, setUpdateAt] = useState(new Date());

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getUsers()
        .then(setUsers)
        .catch(() => setErrorMessage('Try again later'))
        .finally(() => setLoading(false))
    }, 1000);
  }, [updateAt])

  function reload() {
    setUpdateAt(new Date());
    setErrorMessage('');
  }

  return (
    <div className="section py-5">
      <div className="box">
        <div className="title">Users</div>

        {loading && (
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        )}

        {!loading && users.length > 0 && (
          <UsersList users={users} />
        )}

        {!loading && !errorMessage && users.length === 0 && (
          <p className="title is-5">There are no users</p>
        )}

        {errorMessage && (
          <p className="notification is-danger">
            {errorMessage}
            <button onClick={reload}>Reload</button>
          </p>
        )}
      </div>
    </div>
  );
};
