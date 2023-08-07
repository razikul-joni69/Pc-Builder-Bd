const products = require("./db.json")

export default function handler(req, res) {
    res.json({ statusCode: 200, message: "Retrived data successfully", data: products })
}
