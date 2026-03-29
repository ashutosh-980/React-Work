import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex flex-nowrap gap-10 w-2/3 overflow-auto p-4"
    >
      {props.userData.map((elem, id) => {
        return (
          <RightCard
            key={id}
            id={id}
            image={elem.img}
            intro={elem.intro}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
