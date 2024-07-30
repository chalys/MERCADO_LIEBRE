const{check,body} = require("express-validator");
const { loadData } = require("../../data");
const regExPass = ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$; /*https://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=psw*/

const fielEmailRegister = body("email")
.notEmpty().withMessage("El campo es requerido").bail()
.isEmail().withMessage("Formato invalido").bail()
.custom((value,{req})=>{
    const user = loadData("ussers")
    const existUser = users.find(u=>u.email===value.trim())

    if (existUser){
        throw new Error("Ya existe un usuario registrado con ese email")
    }
    return true
})

const fieldPasswordRegister = body("password")
.notEmpty().withMessage("Campo es requerido").bail()
.isLength({min: 8, max:16}).withMessage("Longitud invalida").bail()
.matches(regExPass).withMessage("La contraseña es invalida");

module.exports={
    loginValidation:[],
    regiterValidation:[fielEmailRegister, fieldPasswordRegister],
}