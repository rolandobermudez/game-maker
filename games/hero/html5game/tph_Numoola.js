function n_init_external() {
    if (window.cognito === undefined) {
        window.cognito = {};
    }
    if (window.webkit !== undefined && window.webkit.messageHandlers !== undefined) {
        // initialize via a bridge
        window.webkit.messageHandlers.bridge.postMessage("INIT");
    }
}

function n_get_cognito_credentials() {
    if (window.cognito.credentials) {
        return window.cognito.credentials;
    }
    return undefined;
}

function n_set_cognito_credentials(credentials) {
    window.cognito['credentials'] = credentials;
}