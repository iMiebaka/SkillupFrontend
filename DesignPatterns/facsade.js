// Fetch API
/* This is carries more codes because all the codes are written here*/
try {
  fetch("/connect-client", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(response.statusText);
  console.log(response.json());
} catch (e) {
  const result = { status: "error", message: "Unable to connect to Server" };
  return result;
}

// Axios
/* This is more readable because most of the heavy lifiting is done in the sub JS files*/
api
  .get("/connect-client")
  .then((res) => {
    if (res.status == 200) {
      console.log(res.data);
    }
  })
  .catch(function (e) {
    console.log(e);
  });
