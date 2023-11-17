import * as Crypto from 'expo-crypto';
import base64 from 'react-native-base64';
import { Buffer } from 'buffer';

async function setUpInitialURL (subDomain) {
    console.log("Subdomain is " + subDomain);
    scope = "sharefile:restapi:v3 openid profile sharefile:account offline_access";
    state = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
    codeChallenge = getCodeChallenge();
    sha256 = await getSHA256(codeChallenge);
    url = "https://auth.sharefiletest.io/connect/authorize?response_type=code&client_id=sharFileMobileTest&redirect_uri=sharefile://sharefileAuth.com&scope=" + scope + "&code_challenge=" + sha256 + "&code_challenge_method=S256&state=" + state;
    if(subDomain != undefined || subDomain != null) {
        url = url + "&acr_values=idp:sharefiletest tenant:" + subDomain;
    }
    return url;
}

function getCodeChallenge () {
    buffer = Crypto.getRandomBytes(32);
    base64String = Buffer.from(buffer).toString('base64');
    return base64String;
}

async function getSHA256 (codeChallenge) {
    hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, codeChallenge);
    return hash;
}

module.exports = {setUpInitialURL};