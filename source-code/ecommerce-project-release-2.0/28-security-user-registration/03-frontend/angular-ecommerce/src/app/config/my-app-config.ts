export default {

    oidc: {
        clientId: '<<UPDATE-WITH-YOUR-APP-CLIENT-ID>>',
        issuer: 'https://<<UPDATE-WITH-YOUR-DEV-DOMAIN>>/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    }

}
