import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        returnTo: "/dashboard",
    }),
    logout: handleLogout({
        returnTo: "/",
    }),


});