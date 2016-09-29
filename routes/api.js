var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects

    //allow all get request methods
    if(req.method === "GET"){
        return next();
    }
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not authenticated then redirect him to the login page
    return res.redirect('/#login');
};

//Register the authentication middleware
router.use('/posts', isAuthenticated);

//api for all posts
router.route('/posts')

    //create a new post
    .post(function(req, res){

        var post = new Post();
        post.title = req.body.title;
        post.created_by = req.body.created_by;
        post.upvote = req.body.upvote;
        post.save(function(err, post) {
            if(err){
                return res.send(500, err);
            }
            return res.json(post);
        });

    })

    .get(function(req, res){

        Post.find(function(err, data){

            if(err){
                return res.send(500, err);
            }

            return res.send(200, data);

        });
    })

//api for a specfic post
router.route('/posts/:id')

    //updates specified post
    .put(function(req,res, next){
        Post.findById(req.params.id, function(err, post){
            if(err){
                console.log(err);
                return next(err);
            }else {
                if(req.body.upvote !== undefined) {
                    //case where upvote needs to be updated
                    post.upvote = req.body.upvote;
                    post.save(function(err){
                    if(err) {
                        return res.send(500, err);
                    }
                    return res.send(200, post);

                    });
                }
                if(req.body.contents !== undefined){
                    post.update({$push: {"comments":req.body}}, {safe: true, upsert: true}, function(err, data){
                        if(err){
                            console.log(err);
                            return next(err);
                        }

                        res.json(post);
                    });
                }
            }
        });

    })
    //gets specified post
    .get(function(req,res, next){

        Post.findById(req.params.id, function(err, post){
            if(err) {
                return res.send(500, err);
            }
            return res.send(200, post);
        });
    })

    .delete(function(req,res){
        Post.remove({
            _id: req.params.id
        }, function(err) {
            if(err)
                res.send(err);
            res.json('deleted :(');
        });
    });

module.exports = router;