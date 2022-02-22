export default function Container(props) {
  const { children, className, numCols, ...rest } = props;
  if (!children) return new Error("Children props is missing");
  if (!numCols) return new Error("numCols props is missing");
  return (
    <div
      className={`w-full my-10 md:w-11/12 mx-auto items-center h-[calc(100vh_-_20rem)] md:px-24 md:h-[calc(100vh_-_10rem)] grid grid-cols-${numCols} ${
        className ?? ""
      } `}
      {...rest}
    >
      {props.children}
    </div>
  );
}
