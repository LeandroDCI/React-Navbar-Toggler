import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import userAuth from '../modules/userAuth'

export default function Login() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div className="mx-auto text-center">
            <h3>User Login</h3>
            <p className="text-center">Authentication</p>
            {
                user
                    ?
                    <div className="text-center">
                        <div>{user.name}</div><p>({user.email})</p>
                        <button
                            onClick={() => {
                                setUser(null);
                            }}
                            className="btn btn-danger"
                        >Logout</button>
                    </div>
                    : <div className="text-center">
                        <p>Guest - user isn't authenticated</p>
                        < button
                            onClick={async () => {
                                const newUser = await userAuth();
                                setUser(newUser);
                            }}
                            className="btn btn-info"
                        >
                            Authenticate
            </button></div>
            }



        </div >
    )
}
