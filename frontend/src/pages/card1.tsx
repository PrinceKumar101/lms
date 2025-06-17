
interface cardtype {
    name:string,
    message:string
}
const Card1= ({name, message}:cardtype) => {
  return (
    <>
      <h1>Hii there {name}</h1>
      <p>Message by you is {message}</p>
    </>
  );
};

export default Card1;
