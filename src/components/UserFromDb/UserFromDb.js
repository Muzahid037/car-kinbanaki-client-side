import React from 'react';

const UserFromDb = ({ user }) => {
    const { _id, email, displayName, isAdmin } = user;

    const handleUpdateUser = (email) => {
        if(user.isAdmin)
        {
            user.isAdmin=false;
        }
        else{
            user.isAdmin=true;
        }
        // console.log("Update",_id);
        fetch(`https://protected-wave-67020.herokuapp.com/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) { alert('User Role Changed') }
            });

    }

    return (
        <>

            <tr>
                {/* <th scope="row">1</th> */}
                <td>{email}</td>
                <td>{displayName}</td>
                <td>{isAdmin && "Admin"}{!isAdmin && "User"}</td>
                <td>

                    <button type="button" className="btn btn-primary w-100 d-block" onClick={() => handleUpdateUser(email)}>{isAdmin && "Remove Admin"}{!isAdmin && "Make Admin"}</button>

                </td>
            </tr>

        </>
    );
};

export default UserFromDb;