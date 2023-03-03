/**
 * Log data to `server` (the console)
 */
export const log = (message, data) => {
  data.context = '"log" function';
  data.logApplication = "example-8";
  data.message = "Data was fetched successfully";
  data.time = Date.now();

  console.log(message, data);
};
