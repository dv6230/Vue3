import CryptoJS from '../../node_modules/crypto-js'

export function fetchPostApi(url, parameter) {
    url = process.env.VUE_APP_API_HOST + url

    return fetch(url, {
        method: 'POST',
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameter)
    }).then(response => response.json())

}

export function loginAPI(parameter) {

    let url = process.env.VUE_APP_API_HOST + 'api/test/Decode'
    let secretKey = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_ENCODE_KEY)
    let iv = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_ENCODE_IV)

    const ciphertext = CryptoJS.AES.encrypt(parameter, secretKey,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString();

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ciphertext)
    }).then(response => response.text())
}

