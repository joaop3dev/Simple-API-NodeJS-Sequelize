const Products = require('../models/Products')

const ProductsController = {
    async readAll(req, res) {
        try {
            const products = await Products.findAll()

            if (!products)
                return res.status(400).json({ message: "We don't have registered products" })

            return res.status(200).json({ products })
        } catch (error) {
            return res.status(400).json({ error: error })
        }

    },

    async readOne(req, res) {
        const id = req.params.id

        try {
            const product = await Products.findByPk(id)

            if (!product)
                return res.status(200).json({ message: "Product not found" })

            return res.status(200).json({ product })
        } catch (error) {
            return res.status(400).json({ error: error })
        }
    },

    async create(req, res) {
        const { name } = req.body

        try {
            if (await Products.findOne({ where: { name: name } }))
                return res.status(200).json({ message: "Product already exists" })


            const product = await Products.create(req.body)

            return res.status(200).json({ product })
        } catch (error) {
            return res.status(400).json({ error: error })
        }
    },

    async update(req, res) {
        const id = req.params.id

        try {
            await Products.update(req.body, {
                where: { id }
            })

            return res.status(200).json({ message: "Product was updated successfully" })
        } catch (error) {
            return res.status(400).json({ message: "Error updating Product" })
        }
    },

    async delete(req, res) {
        const id = req.params.id

        try {
            await Products.destroy({ where: { id } })

            return res.status(200).json({ message: "Product was deleted successfully" })
        } catch (error) {
            return res.status(400).json({ error: "Error delete product" })
        }
    }
}

module.exports = ProductsController