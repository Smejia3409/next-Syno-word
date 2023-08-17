import Spinner from "react-bootstrap/Spinner";

export const Loading = () => {
  return (
    <div className="loading-screen ">
      <div className="container d-flex justify-content-center align-items-center vw-100 vh-100">
        <Spinner animation="border" variant="light" />
      </div>
    </div>
  );
};
