export const getUsers = (setLoading, setUsers) => {
  fetch(
    "https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json"
  )
    .then((data) => data.json())
    .then((data) => {
      setUsers(data);
      setLoading(false);
      localStorage.setItem("users", JSON.stringify(data));
    })
    .catch((e) => {
      console.log("error", e);
      setLoading(false);
    });
};
