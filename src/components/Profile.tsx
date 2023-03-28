import React from 'react';
import avatar from '../img/avatar.png';
import './../Profile.css';

function Profile(props: any) {
  return (
    <div className="Profile">
      Main content
      <div>
        <img className="avatar" src={avatar} alt="avatar"/>
      </div>
      <div>
        description
      </div>
      <div>
        My post
        <div>
          New Post
        </div>
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
          <div>
            Post 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;