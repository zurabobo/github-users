import React from "react";
import { ListContainer, ListItem } from "./UsersListStyles";
import UserCard from "../UserCard/Usercard";

const UsersList = ({ users, onUserClick }) => {
  return (
    <>
      {users.length > 0 && (
        <ListContainer>
          {users.map((user) => (
            <ListItem key={user.id}>
              <UserCard  user={user} onUserClick={onUserClick}></UserCard>
            </ListItem>
          ))}
        </ListContainer>
      )}
    </>
  );
};

export default UsersList;


// UsersList.js (or wherever your list is)

// import React from 'react';
// import { Link } from 'react-router-dom';

// const UsersList = ({ users, onUserClick }) => {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           {/* Add Link to the user detail page */}
//           <Link to={`/users/${user.login}`}>{user.login}</Link>
//           {/* Or if you want to handle the click event */}
//           <span onClick={() => onUserClick(user)}>{user.login}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default UsersList;
