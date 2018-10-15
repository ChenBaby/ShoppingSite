import axios from 'axios'
const options = {
    // baseURL: 'http://35.200.61.173:7001'
    "baseURL": 'http://172.20.10.7:7001'
//   baseURL: 'http://35.200.61.173:7001'
//   baseURL: 'http://35.200.61.173:7001'
//   baseURL: 'http://35.200.61.173:7001'
//   baseURL: 'http://35.200.61.173:7001'

}
const _axios = axios.create(options)

const ajax = {
    get (url, data) {
        let config = {
            "params": {
                ...data,
                "ck": encodeURIComponent(localStorage.getItem('CK') || '')
            }
        }
        return _axios.get(url, config).then(res => res.data)
    },
    post (url, data) {
        let config = {
            ...data,
            "ck": encodeURIComponent(localStorage.getItem('CK') || '')
        }
        return _axios.post(url, config).then(res => res.data)
    }
}

export default ajax
