// takes in a string as input and should return true if valid
function validateEmail(email) {
    regex = /^[^@\s]+@[^@\s]+\.[^@\s]+/g;
    if (email.match(regex)) {
        return true;
    }
}

// takes in a string as input and returns true if value
function validateUrls(url) {
    regex = /^https?:\/\/www\.[a-z]+\.(org|com|net)/g;
    if (url.match(regex)) {
        console.log(url.match(regex))
        return true;
    }
}

module.exports = {
    validateEmail,
    validateUrls
}