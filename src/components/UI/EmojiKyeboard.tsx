import Picker, { EmojiClickData } from "emoji-picker-react";

function EmojiKyeboard(props: { onChange: (emojiObject: any) => void }) {
  const onEmojiClick = (emoji: EmojiClickData, e: any) => {
    console.log(emoji);
    props.onChange(emoji);
  };
  return (
    <div className="absolute bottom-16 right-0">
      <Picker
        onEmojiClick={(emoji: EmojiClickData, e) => onEmojiClick(emoji, e)}
        previewConfig={{ showPreview: false }}
      />
    </div>
  );
}

export default EmojiKyeboard;
