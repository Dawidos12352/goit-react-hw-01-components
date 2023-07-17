import React from 'react';
import PropTypes from 'prop-types';
import css from "./FriendList.module.css"


const FriendList = ({friends}) => {
    return (
     <ul className={css.friendList}>
        {friends.map(friend=> (
            <FriendListItem key={friend.id} friend={friend}/>
        ))}
     </ul>   
    );
};

const FriendListItem = ({friend}) => {
    const {avatar, name, isOnline} = friend;
    return (
        <li className={css.item}>
            <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
            <img src={avatar} className={css.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};


FriendList.propTypes = {
    username: PropTypes.string.isRequired,
    friend: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};

export default FriendList;