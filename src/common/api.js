
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

    return await response.json();
}


