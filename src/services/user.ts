import { User } from "../types";

export function getUsers(): Promise<User[]> {
  return fetch('http://localhost:3000/api/users.json')
    .then((response) => {
      if (!response.ok) {

      }

      return response.json();
    })

    .then(users => users.slice(0, 3)
    )
}
