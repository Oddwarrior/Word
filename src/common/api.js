
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
    console.log(result);

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
    console.log(result);

    const { token } = result;
    if (result.status == "ok") localStorage.setItem('token', token);

    return result;
}
