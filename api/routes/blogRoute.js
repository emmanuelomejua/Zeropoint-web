const { Router } = require('express');
const { getPost, deletePost, getAllPost, updatePost, createPost } = require('../controllers/blog');
const router = Router();

router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/id', deletePost)
router.get('/find/:id', getPost)
router.get('/', getAllPost)

module.exports = router
