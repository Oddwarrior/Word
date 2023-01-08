const API_URL = 'https://word-nco2.onrender.com';

export const getMeaning = async (text) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text
        })
    })

    return await response.json();

}


