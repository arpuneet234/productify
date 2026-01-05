import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { status, statusText } = err;
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something Went Wrong...</h2>
      <h3>{status + " : " + statusText}</h3>
    </div>
  );
};

export default Error;
