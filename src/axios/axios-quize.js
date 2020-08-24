import axios from 'axios'

export default axios.create({
    baseURL: 'https://reat-quiz-ab324.firebaseio.com/'
})