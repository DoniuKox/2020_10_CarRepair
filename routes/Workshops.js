const express = require("express")
const workshops= express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")

const User = require("../models/User")
const Address = require("../models/Address")
const Workshop = require("../models/Workshop")

workshops.use(cors())


workshops.post('/getOneWorkshop', async (req, res) => {

    const workshopsEnd = await Workshop.findAll({
        where: {
            idworkshop: req.body.idworkshop
        }
    })
    const addressesEnd = await Address.findAll()
    const usersEnd = await User.findAll({
        where: {
            workshop: 1
        }
    })


    workshopsEnd.forEach(workElem => {
        addressesEnd.forEach(addElem => {
            if(workElem.idaddress === addElem.idaddress){
            usersEnd.forEach(useElem => {
                if(workElem.iduser === useElem.iduser){
                    workshopValues = {
                        firstname: useElem.firstname,
                        lastname: useElem.lastname,
                        email: useElem.email,
                        phonenumber: useElem.phonenumber,
                        addressline1: addElem.addressline1,
                        addressline2: addElem.addressline2,
                        city: addElem.city,
                        country: addElem.country,
                        postcode: addElem.postcode,
                        name: workElem.name,
                        fiscalid: workElem.fiscalid
                    }
                }
            })
        }
        
        })
    });
console.log(workshopValues)
res.send(jwt.sign(workshopValues, process.env.SECRET_KEY, {expiresIn: 1440}))
//res.send(workshopValues)
})


workshops.get('/takeWorkshops', async (req, res) => {


    var resultList = []

    const workshopsEnd = await Workshop.findAll()
    const addressesEnd = await Address.findAll()
    const usersEnd = await User.findAll()


    workshopsEnd.forEach(workElem => {
        addressesEnd.forEach(addElem => {
            if(workElem.idaddress === addElem.idaddress){
            usersEnd.forEach(useElem => {
                if(workElem.iduser === useElem.iduser){
                    workshopValues = {
                        firstname: useElem.firstname,
                        lastname: useElem.lastname,
                        email: useElem.email,
                        phonenumber: useElem.phonenumber,
                        addressline1: addElem.addressline1,
                        addressline2: addElem.addressline2,
                        city: addElem.city,
                        country: addElem.country,
                        postcode: addElem.postcode,
                        name: workElem.name,
                        fiscalid: workElem.fiscalid,
                        idworkshop: workElem.idworkshop
                    }
                    resultList.push(workshopValues) 
                }
            })
        }
        
        })
    });

res.send(resultList)

})

    
module.exports = workshops