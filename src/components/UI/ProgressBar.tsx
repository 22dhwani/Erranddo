function ProgressBar(props: { className?: string; width: any }) {
  const number = props?.width?.split("%")[0];
  return (
    <div
      className="border-slate-300 rounded-3xl bg-slate-300 "
      id={props.width}
    >
      <div
        className={`h-full !w-[${props?.width}] ${
          props?.width?.split("%")[0] > 50 ? "bg-primaryBlue" : "bg-red-500"
        } rounded-3xl text-transparent`}
      >
        hello
      </div>
    </div>
  );
}

export default ProgressBar;
