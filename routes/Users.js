const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
const Address = require("../models/Address")
const Workshop = require("../models/Workshop")
const Car = require("../models/Car")


users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        workshop: 0
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash;
                User.create(userData)
                .then (user => {
                    res.json({status: user.email + ' registered'})
                })
                .catch(err => {
                    res.send('error: '+err)
                })
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

users.post('/registerWorkshop', (req, res) => {
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        workshop: 1
    }
    const addressData = {
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        city: req.body.city,
        country: req.body.country,
        postcode: req.body.postcode
    }
    const workshopData = {
        name: req.body.name,
        fiscalid: req.body.fiscalid,
        iduser: req.body.iduser,
        idaddress: req.body.idaddress
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash;
                User.create(userData)
                .then (user => {
                    workshopData.iduser = user.iduser
                    Address.create(addressData)
                    .then (address => {
                        workshopData.idaddress = address.idaddress
                        Workshop.create(workshopData)
                        .then (workshop => {
                            res.json({status: workshop.name + ' registered'})
                        })
                        .catch(err => {
                            res.send('error: '+err)
                        })
                    })
                    .catch(err => {
                        res.send('error: '+err)
                    })
                })
                .catch(err => {
                    res.send('error: '+err)
                })
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

users.post('/addcar', (req, res) => {
    const carData = {
        name: req.body.name,
        mark: req.body.mark,
        model: req.body.model,
        plate: req.body.plate,
        numbervin: req.body.numbervin,
        iduser: req.body.iduser
    }

    Car.findOne({
        where: {
            numbervin: req.body.numbervin
        }
    })
    .then(car => {
        if(!car){
            Car.create(carData)
            .then (car => {
                res.json({status: car + ' added'})
            })
            .catch(err => {
                res.send('error: '+err)
            })
        }else{
            res.json({error: "Car already exists"})
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

users.post('/getcars', (req, res) => {
    Car.findOne({
        where: {
            iduser: req.body.iduser
        }
    })
    .then(cars => {
        if(cars){            
            res.send(jwt.sign(cars.dataValues, process.env.SECRET_KEY, {expiresIn: 1440}))
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)) {

                
                if(user.workshop===0){
                    res.send(jwt.sign(user.dataValues, process.env.SECRET_KEY, {expiresIn: 1440}))
                }
                else{
                    Workshop.findOne({
                        where:{
                            iduser: user.iduser
                        }
                    })
                    .then(workshop => {
                        Address.findOne({
                            where: {
                                idaddress: workshop.idaddress
                            }
                        })
                        .then(address => {
                            let workshopValues = {
                                firstname: user.firstname,
                                lastname: user.lastname,
                                email: user.email,
                                phonenumber: user.phonenumber,
                                workshop: user.workshop,
                                addressline1: address.addressline1,
                                addressline2: address.addressline2,
                                city: address.city,
                                country: address.country,
                                postcode: address.postcode,
                                name: workshop.name,
                                fiscalid: workshop.fiscalid
                            }
                            res.send(jwt.sign(workshopValues, process.env.SECRET_KEY, {expiresIn: 1440}))

                        })

                    })
                }
               
            }
        }else{
            res.status(400).json({error: 'User do not exists'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = users