const { check, body } = require("express-validator");
const path = require("path");

const fieldName = check("name")
  .notEmpty()
  .withMessage("El nombre es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " " })
  .withMessage("El cmapo nombre debe ser alfanúmerico")
  .bail()
  .isLength({ min: 5, max: 80 })
  .withMessage("La longitud del nombre es incorrecto");

const fieldPrice = check("price")
  .notEmpty()
  .withMessage("El precio es requerido")
  .bail()
  .isNumeric()
  .withMessage("El valor ingresado es incorrecto");

const fieldDiscount = check("discount")
  .optional({
    nullable: true,
  })
  .isNumeric()
  .withMessage("El campo descuento es incorrecto");

const fieldDescription = check("description")
  .notEmpty()
  .withMessage("El campo descripción es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " " })
  .withMessage("El campo descripción debe ser alfanúmerico")
  .bail()
  .isLength({ min: 30, max: 500 })
  .withMessage("La longitud de la descripción es incorrecto");

const fieldImg = body("img").custom((value, { req }) => {
  const image = req.file;
  const extValid = [".png", ".webp", ".jpeg", ".jpg"];
  if (image?.filename) {
    const file = req.file?.filename
    const ext = path.extname(image.filename);

    if (!file) throw new Error("El archivo es requerido");
    else {
      if (!extValid.includes(ext)) {
        throw new Error("El tipo de imagen es incorrecto");
      }
    }
  } 
  return true;
});

const fieldCategory = check("category")
  .isIn(["in-sale", "visited"])
  .withMessage("El campo categoria es requerido");

module.exports = [
  fieldName,
  fieldPrice,
  fieldDiscount,
  fieldDescription,
  fieldCategory,
  fieldImg
];
