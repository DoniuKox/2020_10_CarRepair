import axios from 'axios'

export const getWorkshops = workshops => {
    return axios
    .get('workshops/takeWorkshops')
    .then(res => {
        localStorage.setItem('workshops', res.data)
        return res.data
    })

}