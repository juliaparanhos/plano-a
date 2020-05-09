export const authSecret = process.env.AUTH_SECRET; 
export const Authentication = () => localStorage.getItem(authSecret) != null;
export const getToken = () => localStorage.getItem(authSecret);
export const login = token => {
    localStorage.setItem(authSecret, token)
};

export const logout = () => {
    localStorage.removeItem(authSecret);
}
