export function isLoggedIn() {
  const user = getUser();
  return (user && user.token);
}

export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}
