const Heading = (props: {
  variant?: string;
  headingclassName?: string;
  text: React.ReactNode;
}) => {
  switch (props.variant) {
    case "bigTitle":
      return (
        <h1
          className={`text-2xl lg:text-2xl font-bold  ${props.headingclassName} `}
          {...props}
        >
          {props.text}
        </h1>
      );
    case "headingTitle":
      return (
        <h3
          className={`text-xl font-bold   ${props.headingclassName} `}
          {...props}
        >
          {props.text}
        </h3>
      );
    case "subTitle":
      return (
        <h4
          className={`text-lg font-semibold  ${props.headingclassName}  `}
          {...props}
        >
          {props.text}
        </h4>
      );
    case "subHeader":
      return (
        <h5
          className={`text-base font-semibold   ${props.headingclassName} `}
          {...props}
        >
          {props.text}
        </h5>
      );
    case "smallTitle":
      return (
        <h5
          className={`text-sm font-normal  ${props.headingclassName} `}
          {...props}
        >
          {props.text}
        </h5>
      );

    default:
      return <p {...props}>{props.text}</p>;
  }
};

export default Heading;
