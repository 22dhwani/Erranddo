import useSWR from "swr";
import DealerReviewsSkeleton from "../skeleton/DealerReviewsSkeleton";
import CommentItem from "./CommentItem";
import { fetcher } from "../../../../store/customer/home-context";
import { ReviewData } from "../../../../models/customer/reviewlist";
import { useParams } from "react-router";
import Heading from "../../../UI/Heading";

function CommentSection() {
  const businessId = useParams();

  const url = `https://erranddo.kodecreators.com/api/v1/reviews?page=1&per_page=10&user_business_id=${businessId?.id}`;
  const { data, isLoading } = useSWR(url, fetcher);
  const businessReview: ReviewData[] = data?.data;

  return (
    <div>
      {isLoading ? (
        <DealerReviewsSkeleton limit={1} />
      ) : (
        <div>
          {businessReview.length === 0 ? (
            <div className="w-full flex lg:flex-row xs:flex-col gap-3 justify-center py-20">
              <Heading
                headingclassName=""
                text={`No Reviews !!`}
                variant="subTitle"
              />
            </div>
          ) : (
            businessReview.map((item) => {
              const createdAt = new Date(item.created_at);
              const formattedDate = createdAt.toLocaleDateString("en-GB");
              return (
                <CommentItem
                  key={item.id}
                  name={item?.user?.full_name}
                  subTitle={item?.service?.name}
                  description={item.description}
                  ratingCount={parseInt(item.rating)}
                  date={formattedDate}
                  comment={"thankyou"}
                  id={item.id}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default CommentSection;
