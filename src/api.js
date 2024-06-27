const API_URL = 'https://dummyjson.com'

export async function login(username, password) {
    const res = await fetch(`${API_URL}/auth/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
    const json = await res.json();
    return json.token;
}

export async function getProducts(){
    const token = localStorage.getItem("token")
    const res = await fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    const json = await res.json();

    return json.products;
}

export async function getProductById(id) {
    const token = localStorage.getItem("token")
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    const json = await response.json();
    return json
}