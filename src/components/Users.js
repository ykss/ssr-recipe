import React from 'react'
import { Link } from 'react-router-dom'

function Users({ users }) {
    if (!users) return null;
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li>
                        <Link to={`/users/${user.id}`}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users
