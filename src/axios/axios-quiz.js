import axios from "axios";


export default axios.create({
    baseURL:'https://react-quiz-f3eb0-default-rtdb.firebaseio.com/'
})