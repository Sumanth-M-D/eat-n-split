import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleOpenAddFriendForm() {
    setOpenAddFriend((open) => !open);
    setSelectedFriend(null);
  }

  function addFriend(friend) {
    setFriends((prev) => [...prev, friend]);
    setOpenAddFriend(false);
  }

  function handleOpenSplitBill(friend) {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));
    setOpenAddFriend(false);
  }

  function updateBalance(balance) {
    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: balance }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleOpenSplitBill={handleOpenSplitBill}
          selectedFriend={selectedFriend}
        />

        {openAddFriend && <FormAddFriend addFriend={addFriend} />}

        <Button onClick={handleOpenAddFriendForm}>
          {openAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          friend={selectedFriend}
          key={selectedFriend.id}
          updateBalance={updateBalance}
        />
      )}
    </div>
  );
}

export default App;
