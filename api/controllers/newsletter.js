const News = require('../models/Newsletter');

const subNewsletter = async (req, res) => {

    const { email } = req.body

    try {
        const isExists = await News.findOne({ email: req.body.email })

        if(isExists){
            return res.status(300).json({msg: 'User already subscribed to our newsletter'})
        } else {
            const newEmail = await News.create({email})
            if(!newEmail){
                return res.status(500).json('Something went wrong')
            }else{
                return res.status(200).json('Successfully subscribed to our newsletter')
            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = subNewsletter
