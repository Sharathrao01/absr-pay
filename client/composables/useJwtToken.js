export const useJwtToken = () => {
    const storeToken = (token) => {
        localStorage.setItem('jwtToken',token);
    };

    const getToken = () => {
        const token = localStorage.getItem('jwtToken')
        return token;
    };

    const isTokenValid = () => {
        const token = getToken()
        if(!token)
        return false;

        //expiration check

        return true;
    };

    const refreshToken = async () => {

    };

    return{
        storeToken,
        getToken,
        isTokenValid,
        refreshToken
    };
};




