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
        return true
    })
}
export const registerWorkshop = newWorkshop => {
    return axios
    .post('users/registerWorkshop', {
        firstname: newWorkshop.firstname,
        lastname: newWorkshop.lastname,
        email: newWorkshop.email,
        password: newWorkshop.password,
        phonenumber: newWorkshop.phonenumber,
        addressline1: newWorkshop.addressline1,
        addressline2: newWorkshop.addressline2,
        city: newWorkshop.city,
        country: newWorkshop.country,
        postcode: newWorkshop.postcode,
        name: newWorkshop.name,
        fiscalid: newWorkshop.fiscalid
    })
    .then(res => {
        console.log("Workshop registered")
        return true
    })
}

export const login = user => {
    return axios
    .post('users/login', {
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

export const getcars = iduser => {
    return axios
    .post('users/getcars', {
        iduser: iduser,
    })
    .then(res => {
        localStorage.setItem('carsToken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

export const addcar = newcar => {
    return axios
    .post('users/addcar', {
        name: newcar.name,
        mark: newcar.mark,
        model: newcar.model,
        plate: newcar.plate,
        numbervin: newcar.numbervin,
        iduser: newcar.iduser,
    })
    .then(res => {
        console.log("Car Added!")
        return true
    })
}