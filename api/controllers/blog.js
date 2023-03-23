'use strict';
const Post = require('../models/Blog')

const createPost = async (req, res) => {

    try {
        const newPost = new Post(req.body)
            await newPost.save()
            res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }

}

const updatePost = async (req, res) => {

    try {
        const updatedpost = await Post.findByIdAndUpdate(req.params.id, {set: req.body}, {new: true})
        res.status(200).json(updatedpost)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deletePost = async (req, res) => {

    try {
        const deletepost = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json('Post deleted successfully')
    } catch (error) {
        res.status(500).json(error)
    }
}


const getPost = async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllPost = async (req, res) => {

    try {
        const posts = await Post.find(req.query).limit(10)
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = { createPost, updatePost, deletePost, getPost, getAllPost }