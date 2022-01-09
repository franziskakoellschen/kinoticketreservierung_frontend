export function isLoggedIn() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (user && user.token);
}
