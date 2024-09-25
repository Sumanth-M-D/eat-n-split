import Button from "./Button";

function Friend({ friend, handleOpenSplitBill, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}

      <Button onClick={() => handleOpenSplitBill(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
