import Picker, { EmojiClickData, SkinTones, Theme } from "emoji-picker-react";

function EmojiKyeboard(props: { onChange: (emojiObject: any) => void }) {
  const onEmojiClick = (emoji: EmojiClickData, e: any) => {
    console.log(emoji);
    props.onChange(emoji);
  };
  return (
    <div className="absolute bottom-16 right-0">
      <Picker
        theme={Theme.DARK}
        defaultSkinTone={SkinTones.LIGHT}
        onEmojiClick={(emoji: EmojiClickData, e) => onEmojiClick(emoji, e)}
        previewConfig={{ showPreview: false }}
      />
    </div>
  );
}

export default EmojiKyeboard;
