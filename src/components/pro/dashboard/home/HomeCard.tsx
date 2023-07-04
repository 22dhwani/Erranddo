function HomeCard(props: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white shadow-sm rounded-md ${props.className}`}>
      {props.children}
    </div>
  );
}

export default HomeCard;
