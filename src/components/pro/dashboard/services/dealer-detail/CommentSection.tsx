import HomeCard from "../../home/HomeCard";
import CommentItem from "./CommentItem";

function CommentSection() {
  const reivews = [
    {
      name: "John Grant",
      subTitle: "TV Installation",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",

      ratingCount: 4,
      date: "25/03/2023",
      comment: "Thank you so much for using us.",
    },

    {
      name: "Peter Andrew",
      subTitle: "TV Installation",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",

      ratingCount: 4,
      date: "25/03/2023",
      comment: "Thank you so much for using us.",
    },
    {
      name: "James Smith",
      subTitle: " CCTV Installation",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",

      ratingCount: 4,
      date: "25/03/2023",
      comment: "Thank you so much for using us.",
    },
    {
      name: "Jay Ward",
      subTitle: "TV Wall Mounting",
      description:
        "Had TV Guru come out to get our TV wall mounted and we are very impressed with the service.",

      ratingCount: 4,
      date: "25/03/2023",
      comment: "Thank you so much for using us.",
    },
  ];
  return (
    <HomeCard className="px-5 ">
      <div>
        {reivews.map((item) => {
          return (
            <CommentItem
              name={item.name}
              subTitle={item.subTitle}
              description={item.description}
              ratingCount={item.ratingCount}
              date={item.date}
              comment={item.comment}
            />
          );
        })}
      </div>
    </HomeCard>
  );
}

export default CommentSection;
