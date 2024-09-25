import Friend from "./Friend";
import { useState } from "react";

function FriendList({ friends, handleOpenSplitBill, selectedFriend }) {
  const friendsList = friends.map((friend) => (
    <Friend
      key={friend.id}
      friend={friend}
      handleOpenSplitBill={handleOpenSplitBill}
      selectedFriend={selectedFriend}
    />
  ));

  return (
    <div>
      <ul>{friendsList}</ul>
    </div>
  );
}

export default FriendList;
