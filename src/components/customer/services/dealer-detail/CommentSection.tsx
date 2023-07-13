import useSWR from "swr";
import DealerReviewsSkeleton from "../skeleton/DealerReviewsSkeleton";
import CommentItem from "./CommentItem";
import { fetcher } from "../../../../store/customer/home-context";
import { ReviewData } from "../../../../models/customer/reviewlist";
import { useParams } from "react-router";

function CommentSection() {
  const businessId = useParams();
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
  ];

  const url = `https://erranddo.kodecreators.com/api/v1/reviews?page=1&per_page=10&user_business_id=${businessId?.id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const businessReview: ReviewData[] = data?.data;

  return (
    <div>
      {isLoading ? (
        <DealerReviewsSkeleton limit={1} />
      ) : (
        <div>
          {businessReview.map((item) => {
            const createdAt = new Date(item.created_at);
            const formattedDate = createdAt.toLocaleDateString("en-GB");
            return (
              <CommentItem
                name={item?.user_bussiness?.name}
                subTitle={item?.service?.name}
                description={item.description}
                ratingCount={parseInt(item.rating)}
                date={formattedDate}
                comment={"thankYOu"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CommentSection;
