export const storeUser = (data: any) => {
    localStorage.setItem('username', data.user.username);
    localStorage.setItem('token', data.jwt);
  };
export const getUserData = () => {
    const stringfiedUser = localStorage.getItem('username') || ""
    if (stringfiedUser) {
        return JSON.parse(stringfiedUser)
    }
    return false
}
