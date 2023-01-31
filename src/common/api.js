const URL = import.meta.env.VITE_BASE_URL;


export const getMeaning = async (text) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text
        })
    })
    return response.json();
}

//signup
export const createUser = async ({ user }) => {

    const { fname, lname, email, mobile, password } = user;

    const response = await fetch(`${URL}/user/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname,
            lname,
            email,
            mobile,
            password
        })
    });
    const result = await response.json();
    console.log("user registred " + result);

    return result;
}

//login
export const logUser = async ({ email, password }) => {

    const response = await fetch(`${URL}/user/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const result = await response.json();
    console.log("user logged in" + result);

    return result;
}

//updateWord
export const updateUserWords = async ({ word }, token, id) => {

    const response = await fetch(`${URL}/user/updateWord/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "OPTIONS ,POST,GET, PATCH"
        },
        body: JSON.stringify(word)
    });

    const result = await response.json();
    console.log("user updated: " + result);

    return result;
}
