import axios from 'axios'

export const getWorkshops = workshops => {
    return axios
    .get('workshops/takeWorkshops')
    .then(res => {
        localStorage.setItem('workshops', res.data)
        return res.data
    })

}

export const getOneWorkshop = idworkshop => {
    return axios
    .post('workshops/getOneWorkshop', {
        idworkshop: idworkshop
    })
    .then(res => {
        localStorage.removeItem('oneWorkshop')
        localStorage.setItem('oneWorkshop', res.data)
        return res.data
    })

}