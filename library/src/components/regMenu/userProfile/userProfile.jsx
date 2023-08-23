import React from 'react';
import './userProfile.scss';

const UserProfile = ({authorisedUser}) => {
  return (
    <div className="profile-window" onClick={(e) => e.stopPropagation()}>
      <div className="profile-window__avatar-area">
        <div className="profile-window__avatar-wrapper">
          <div className="profile-window__avatar">
            {authorisedUser
              ? authorisedUser.firstName[0].toUpperCase() +
                authorisedUser.lastName[0].toUpperCase()
              : ""}
          </div>
          <div className="profile-window__full-name">
            {authorisedUser.firstName + " " + authorisedUser.lastName}
          </div>
        </div>
      </div>
      <div className="profile-window__info"></div>
    </div>
  );
}

export default UserProfile;
