// functional component representing the User Profile page in which
// a given user is able to access their profile

import React from 'react';
import BaseTemplate from '../BaseTemplate';

import AddUserModal from '../Forms/AddUserModal';
import DeleteUserModal from '../Forms/DeleteUserModal';

const UserProfileView = () => {
    try {
        console.log("=========UserProfileView=========");
        const store = sessionStorage;
        console.log("user profile view store:", store);
    } catch (error) {
        console.log("UserProfileView error:", error.message);
    }

    return (
        <BaseTemplate>
            <h1>User Profile View</h1>
            <hr />
            <AddUserModal />
            <hr />
            <DeleteUserModal />
            <hr />
        </BaseTemplate>
    )
};

export default UserProfileView;