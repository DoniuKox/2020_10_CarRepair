const express = require("express")
const workshops= express.Router()
const cors = require('cors')

const User = require("../models/User")
const Address = require("../models/Address")
const Workshop = require("../models/Workshop")

workshops.use(cors())


workshops.get('/takeWorkshops', async (req, res) => {



    var resultList = []
    const workshops2 = await Workshop.findAll()


        workshops2.forEach(one => {

            let workshopValues = {
                firstname: "",
                lastname: "",
                email: "",
                phonenumber: "",
                addressline1: "",
                addressline2: "",
                city: "",
                country: "",
                postcode: "",
                name: '',
                fiscalid: ''
            }

            const address2 = Address.findOne({
                where: {
                    idaddress: one.idaddress
                }
            }).then(ad => {
                console.log(ad.city)
            })

            const user2 = User.findOne({
                where:{
                    iduser: one.iduser
                }
            }).then(us => {
                console.log(us.phonenumber) //tutaj wyświetla się poprawna wartość pobierana z bazy danych
                workshopValues.phonenumber = us.phonenumber  // też nie działa
            })

           
            workshopValues = {
                firstname: "Imię",
                lastname: "Nazwisko",
                email: "przykladowy@email.com",
                phonenumber: "123-456-789",
                addressline1: "ul. Krakowska 22/33",
                addressline2: "budynek A",
                city: "Warszawa",
                country: "Polska",
                postcode: "22-222",
                name: one.name,
                fiscalid: one.fiscalid
            }
            resultList.push(workshopValues) 


})

//console.log(resultList)
res.send(resultList)
})

    
module.exports = workshops