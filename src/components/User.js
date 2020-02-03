import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";

export default function User() {
    const { user } = useContext(UserContext);
    return (
        <div className="user">
            {user ?
                <div className="badge badge-success">{user.name}</div>
                :
                <div className="badge badge-secondary">Guest</div>
            }
        </div>

    )
}
