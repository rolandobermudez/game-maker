function n_request_cognito_credentials() {
    if (window.cognito === undefined) {
        window.cognito = {};
    }
    if (window.webkit !== undefined && window.webkit.messageHandlers !== undefined) {
        // initialize cognito via a bridge
        window.webkit.messageHandlers.bridge.postMessage("COGNITO");
    }
}

function n_set_cognito_credentials(key, secret, session) {
    window.cognito['credentials'] = {
        key: key,
        secret: secret,
        session: session
    };

    global.gmlcognito_key = key;
    global.gmlcognito_secret = secret;
    global.gmlcognito_session = session;

    return "SUCCESS";
}
