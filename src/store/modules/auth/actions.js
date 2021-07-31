let timer;

export default {
    async login(context, payload) {
        return context.dispatch("auth", {
            ...payload,
            mode: "login",
        });
    },
    async signup(context, payload) {
        return context.dispatch("auth", {
            ...payload,
            mode: "signup",
        });
    },

    async auth(context, payload) {
        const mode = payload.mode;
        let formData = new FormData();

        formData.append("email", payload.email);
        formData.append("password", payload.password);

        let url = "http://localhost:8000/api/login";

        if (mode === "signup") {
            formData.append("name", payload.name);
            url = "http://localhost:8000/api/register";
        }
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const responseData = await response.json();

        if (responseData.status == false) {
            const error = new Error(
                responseData.message || "Failed to authenticate. Check your login data."
            );
            throw error;
        }

        const expiresIn = +responseData.expires_in * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem("token", responseData.access_token);
        /// localStorage.setItem('userId', responseData.localId);
        localStorage.setItem("tokenExpiration", expirationDate);

        timer = setTimeout(function() {
            context.dispatch("autoLogout");
        }, expiresIn);
        console.log(expiresIn);
        context.commit("setUser", {
            token: responseData.access_token,
            //userId: responseData.localId
        });
    },
    tryLogin(context) {
        const token = localStorage.getItem("token");
        // const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem("tokenExpiration");

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }
        console.log(expiresIn);
        timer = setTimeout(function() {
            context.dispatch("autoLogout");
        }, expiresIn);

        if (token) {
            context.commit("setUser", {
                token: token,
                ///userId: userId
            });
        }
    },
    logout(context) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("tokenExpiration");

        clearTimeout(timer);

        context.commit("setUser", {
            token: null,
            userId: null,
        });
    },
    autoLogout(context) {
        context.dispatch("logout");
        context.commit("setAutoLogout");
    },
};