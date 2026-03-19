const fetch = require('node-fetch');

exports.handler = async (event) => {
    const query = event.queryStringParameters.q || 'cryptocurrency';
    const apiKey = 'a7cde5cad800464f855d4b5e401a4b24';

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&pageSize=20&apiKey=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
};