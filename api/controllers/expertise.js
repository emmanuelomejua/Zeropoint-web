const Expertise = require('../models/Expertise');

const newExpert = async (req, res) => {
    try {
        const expert = await Expertise.create(req.body)
            await expert.save()
            res.status(201).json(expert)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateExpert = async (req, res) => {
    try {
        const expert = await Expertise.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(expert)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteExpert = async (req, res) => {
    try {
        const expert = await Expertise.findByIdAndDelete(req.paraams.id)
        res.status(200).json('Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { newExpert, updateExpert, deleteExpert}