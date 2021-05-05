import axios from 'axios'



export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID oSOnIotL0HtzLn201166l0gZfQmZY1bIGNE_BdMwyqM'
    }
});


