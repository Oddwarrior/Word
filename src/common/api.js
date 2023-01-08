const API_URL = import.meta.env.VITE_SEARCH_URL;

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


