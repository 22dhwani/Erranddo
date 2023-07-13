function CreditsCard(props: { children: React.ReactNode }) {
  return (
    <div className="w-full items-center flex justify-center px-5 py-5">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white border-t-[0.5px] border-t-slate-100 dark:border-none shadow-md py-5 px-5 rounded-md flex flex-col dark:bg-dimGray xl:w-full xs:w-full dark:text-white">
        {props.children}
      </div>
    </div>
  );
}

export default CreditsCard;
