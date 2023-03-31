import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://portfolio-f3632-default-rtdb.firebaseio.com/'
    }
)