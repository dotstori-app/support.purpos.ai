function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(';');

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split('=');

        /* Removing whitespace at the beginning of the cookie name
      and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

function checkCookie() {
    // Get cookie using our custom function
    var session = getCookie('_purpos_session');
    console.log(session);
    if (!session) {
        console.log('not yet logged in');
        // window.location = 'https://app.purpos.ai/admins/sign_in';
    }
    /*
    if (firstName != '') {
        alert('Welcome again, ' + firstName);
    } else {
        firstName = prompt('Please enter your first name:');
        if (firstName != '' && firstName != null) {
            setCookie('firstName', firstName, 30);
        }
    }
    */
}
checkCookie();
