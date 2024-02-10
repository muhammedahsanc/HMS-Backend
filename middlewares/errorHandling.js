import { config } from "dotenv";
config();

const ErrorHandlingMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({
    message: err.message,
    stack:  process.env.NODE_ENV === "development" ? err.stack : null,
  });
};
//eda ocess.env.NODE_ENV ee sanam env file kodthittilla ad kodthaloondu tto
export default ErrorHandlingMiddleware;
