import {createClient} from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API,
    accessToken: process.env.REACT_APP_TOKEN
})