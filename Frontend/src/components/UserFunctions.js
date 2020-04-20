import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register', {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.password,
        phonenumber: newUser.phonenumber,
    })
    .then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios
    .post('customers/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem('userToken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}