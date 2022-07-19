import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [emojiFromCurrentRender, queueRerenderWithNewEmoji] = useState("⏰");
  const [favouriteEmojiFromCurrentRender, queueRerenderWithNewFavouriteEmoji] =
    useState("⏰");

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your favourite emoji: {favouriteEmojiFromCurrentRender}</p>
      <p>{emojiFromCurrentRender}</p>
      <button onClick={() => queueRerenderWithNewEmoji("⏰")}>⏰</button>
      <button onClick={() => queueRerenderWithNewEmoji("🛌")}>🛌</button>
      <button onClick={() => queueRerenderWithNewEmoji("🍳")}>🍳</button>
      <button onClick={() => queueRerenderWithNewEmoji("🍽️")}>🍽️</button>
      <button onClick={() => queueRerenderWithNewEmoji("😋")}>😋</button>
      <hr />
      <button
        onClick={() =>
          queueRerenderWithNewFavouriteEmoji(emojiFromCurrentRender)
        }
      >
        Store current emoji
      </button>
    </>
  );
}
