const express = require('express');
const cors = require("cors");
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "4d292d0b-2734-4154-a8a2-a5d04540eab7" } }
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

    return res.json({ username: username, secret: "waqas251..." });;
});

app.listen(3001);