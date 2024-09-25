import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, updateBalance }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [paidBy, setPaidBy] = useState("user");
  const paidByFriend = bill ? bill - myExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill) return alert("Please enter the bill value");
    if (!myExpense) return alert("Please enter your expense");
    //  if (myExpense > bill) return alert("Your expense must be lesser than the bill");

    const newBalance = paidBy === "user" ? bill - myExpense : myExpense * -1;
    const totalBalance = friend.balance + newBalance;

    setBill("");
    setMyExpense("");
    setPaidBy("user");

    updateBalance(totalBalance);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label htmlFor="bill">💴Bill value</label>
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="myExpense">🕴️ Your expense</label>
      <input
        type="number"
        id="myExpense"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friendExpense">🧑‍🤝‍🧑 {friend.name}'s expense</label>
      <input id="friendExpense" value={paidByFriend} disabled />

      <label htmlFor="friendExpense">💸 Who is paying the bill</label>
      <select
        id="friendExpense"
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
      >
        <option value={"user"}> you</option>
        <option value={friend.name}> {friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
