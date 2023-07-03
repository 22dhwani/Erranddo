import { useNavigate } from "react-router-dom";

function Card(props: { image: string; desc: string }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/services/service-detail");
      }}
    >
      <div className="flex flex-col items-center">
        <img src={props.image} alt="" />
        <p className="font-medium 2xl:text-xl xl:text-lg md:text-md xs:text-sm dark:text-white">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

export default Card;
