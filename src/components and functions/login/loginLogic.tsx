/* eslint-disable @typescript-eslint/no-explicit-any */

const table1 = import.meta.env.VITE_TABLE_URL;
const key1 = import.meta.env.VITE_API_KEY;


export async function getUserInfo(username: string) {
    
    try {
        const response = await fetch(`${table1}rest/users-info?q={"username":"${username}"}`, {
            method: 'GET',
            headers: {
                'x-apikey': key1,
                'Content-Type': 'application/json' // Ensure Content-Type is correct
            }
            
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

export async function postUserInfo(username: string, password: string, email: string, isMaster: boolean) {
    const info = {
        name: username,
        password: password,
        email: email,
        isMaster: isMaster
    };

    try {
        const response = await fetch(`${table1}rest/users-info`, {
            method: 'POST',
            headers: {
                'x-apikey': key1,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
            throw new Error('Network response was not ok || ' + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}