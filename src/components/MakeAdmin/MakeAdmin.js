import React, { useEffect, useState } from 'react';
import UserFromDb from '../UserFromDb/UserFromDb';

const MakeAdmin = () => {
    const [usersFromdb, setUsersFromdb] = useState([]);
    useEffect(() => {
        fetch(`https://protected-wave-67020.herokuapp.com/users`)
            .then(res => res.json())
            .then(users => {
                //console.log(users);
                setUsersFromdb(users);
            })
    }, [usersFromdb])

    

    return (
        <div>
            <h2>Make admin</h2>
            <table class="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersFromdb.map(user => <UserFromDb
                            key={user._id}
                            user={user}>
                        </UserFromDb>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MakeAdmin;