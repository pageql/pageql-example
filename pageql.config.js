import { client } from './client.js';

export default {
    auth: {
        checkRole: (requiredRole) => {
            //Used by pageql:authRole directive (which relies on having a class called hidden as of now)
            //Return false if user's role fails to hit specifications
            //Returning false hides the component

            return !window.pageql.user.role.includes(requiredRole);
        },
        doLogin: (loginCallback, event) => {
            //Used by pageql:authLogin directive
            //Can get value of "password" input with event.target.password.value

            //Do login logic here

            window.pageql.user = {
                name: event.target.email.value,
                role: [
                    "manager"
                ], //Get from login response
            };

            window.pageql.authState.set({ loggedIn: true });

            loginCallback();
        },
        doLogout: (logoutCallback, event) => {
            //Used by pageql:authLogout directive
            window.pageql.authState.set({ loggedIn: false });

            logoutCallback();
        },
        doRegister: (registerCallback, event) => {
            //Used by pageql:authRegister directive
            //Can get value of "password" input with event.target.password.value

            //Do register logic here

            window.pageql.user = {
                name: event.target.email.value,
                role: [
                    "admin"
                ], //Get from login response
            };

            window.pageql.authState.set({ loggedIn: true });

            registerCallback();
        },
        getUserId: () => {
            //Custom functions like this can be defined and accessed anywhere with window.pageql.auth.getUserId()
            return "my-user-id";
        },
        getTenantId: () => {
            //You can remove this if you're not using multi tenant!
            return "1";
        }
    },
    client,
}