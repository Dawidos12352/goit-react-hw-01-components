import React from "react";

import Profile from "./Profile/profile";

import user from "./Profile/user.json";




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      stats = {user.stats}
      avatar = {user.avatar}
      />
    </div>
  );
};
