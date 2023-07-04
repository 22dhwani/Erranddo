function ProgressBar(props: { className?: string; width: any }) {
  console.log(props.width);
  const number = props.width.split("%")[0];
  console.log(number);
  return (
    <div className="border-slate-300 rounded-3xl bg-slate-300">
      <div
        className={`h-full w-[${props.width}] ${
          props.width.split("%")[0] > 50 ? "bg-primaryBlue" : "bg-red-500"
        } rounded-3xl text-transparent`}
      >
        hello
      </div>
    </div>
  );
}

export default ProgressBar;
