export default {
    auth: {
        domain: "<<UPDATE-WITH-AUTHO-DOMAIN-NAME>>", //Ex: dev-xxxxxxxxxxx.us.auth0.com
        clientId: "<<UPDATE-WITH-CLIENT-ID>>",
        authorizationParams: {
            redirect_uri: "http://localhost:4200/login/callback",
            audience: "http://localhost:8080",
          },
    },
    httpInterceptor: {
        allowedList: ['http://localhost:8080/api/orders/**','http://localhost:8080/api/checkout/purchase'],
    },
}
