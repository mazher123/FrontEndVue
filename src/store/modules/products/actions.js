export default {
    async registerProducts(context, data) {
        //  const userId = context.rootGetters.userId;

        let formData = new FormData();
        formData.append("title", data.title);
        formData.append("price", data.price);
        formData.append("description", data.description);
        formData.append("image", data.image);

        const Token = context.rootGetters["auth/token"];
        const url = "http://localhost:8000/api/products";
        const response = await fetch(url, {
            method: "post",
            headers: {
                Authorization: "bearer" + Token,
            },
            body: formData,
        });

        const responseData = await response.json();

        if (responseData) {
            console.log("success");
        }
    },

    async loadProducts(context) {
        console.log("inside action");

        const Token = context.rootGetters["auth/token"];
        console.log(context);
        const url = "http://localhost:8000/api/products";
        const response = await fetch(url, {
            method: "get",
            headers: {
                Authorization: "bearer" + Token,
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.json();

        console.log(responseData.data);
        // if (response.StatusCode != 200) {
        //     const error = new Error(responseData.message || "Failed to fetch!");
        //     throw error;
        // }

        const product = [];

        let data = responseData.data;
        console.log("sdffsdf");
        for (const key in data) {
            const products = {
                id: data[key].id,
                title: data[key].title,
                description: data[key].description,
                price: data[key].price,
                image: data[key].image,
            };
            product.push(products);
        }
        console.log(product);
        context.commit("setProduct", product);
        context.commit("setFetchTimestamp");
    },

    async deleteProduct(context, payload) {
        console.log("inside action");

        const Token = context.rootGetters["auth/token"];
        console.log(context);
        const url = "http://localhost:8000/api/products/" + payload;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: "bearer" + Token,
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.json();

        if (responseData.StatusCode == 200) {
            context.dispatch("loadProducts");
        }
    },

    async editProduct(context, payload) {
        console.log("inside action");

        const Token = context.rootGetters["auth/token"];
        console.log(context);
        const url = "http://localhost:8000/api/products/" + payload;
        const response = await fetch(url, {
            method: "get",
            headers: {
                Authorization: "bearer" + Token,
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.json();

        const product = [];

        let data = responseData.data;
        console.log("sdffsdf");

        const products = {
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image,
        };
        product.push(products);

        console.log(product);
        context.commit("setEditProduct", product);
    },

    async updateProducts(context, payload) {
        // console.log("inside action");
        console.log(payload);

        let formData = new FormData();
        formData.append("title", payload.title);
        formData.append("price", payload.price);
        formData.append("description", payload.description);

        formData.append("image", payload.image);

        const Token = context.rootGetters["auth/token"];
        console.log(context);
        const url = "http://localhost:8000/api/update-products/" + payload.id;
        const response = await fetch(url, {
            method: "post",
            headers: {
                Authorization: "bearer" + Token,
                // "Content-Type": "x-www-form-control",
            },
            body: formData
        });
        const responseData = await response.json();

        console.log(responseData);
    },
};