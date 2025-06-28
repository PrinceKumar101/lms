export interface ButtonPropsType {
  varient?: string;
  size?: "small" | "medium" | "large";
  customStyle?: string;
  innerText: string;
}
const Button = (props: ButtonPropsType) => {
  const varientSize = () => {
    switch (props.size) {
      case "small":
        return "p-1 font-light text-sm ";
        break;
      case "medium":
        return "p-3 font-semibold text-md";
        break;
      case "large":
        return "p-5 font-bold text-xl";
        break;
      default:
        break;
    }
  };
  const primaryVarient =
    "bg-sky-500 text-black hover:text-black/70 hover:bg-sky-600";
  const secondaryVarient =
    "bg-black/90 text-white hover:text-white/80 hover:bg-black";

  return (
    <>
      <button
        className={`rounded ${
          props.varient == "primaryVarient" ? primaryVarient : secondaryVarient
        } ${props.size ? varientSize() : ""} ${props.customStyle??""}`}
      >
        {props.innerText}
      </button>
    </>
  );
};
export default Button;
