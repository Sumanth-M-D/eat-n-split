import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ addFriend }) {
  const [img, setImg] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return alert("Please enter the name");

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name,
      image: `${img}?=${id}`,
      balance: 0,
    };

    setImg("https://i.pravatar.cc/48");
    setName("");

    addFriend(newFriend);
  }

  return (
    <div>
      <div>
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label htmlFor="name">🫂Friend name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="image">🧞Image url</label>
          <input
            type="text"
            id="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />

          <Button type="submit">Add</Button>
        </form>
      </div>
    </div>
  );
}

export default FormAddFriend;
