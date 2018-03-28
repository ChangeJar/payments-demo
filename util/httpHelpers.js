

module.exports.checkHttpStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else if (response.status === 401) {
        throw new Error("Authorization Denied")
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

module.exports.checkOAuthHttpStatus = (response) => {
    if (response.status === 200) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

module.exports.parseJSON = (response) => {
    return response.json()
}
