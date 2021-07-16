import * as skillDb from '../data/skill-db.js'//allows us access to database

export{
    index, show, newskill as new, create, deleteSkill as delete
}

function deleteSkill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(err, skill) {
    res.redirect('/skills')
  })
} 

function create(req, res) {
  console.log(req.body)
  skillDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function newskill(req, res){
    res.render('skills/new')
}

function index(req, res) {
  skillDb.find({}, function (error, skills) {
    res.render("skills/index", {
      skills,
      error,
      time: req.time
    });
  });
}
function show(req, res){
    skillDb.findById(req.params.id, function(error, skill) {
        res.render('skills/show', {
          skill: skill,
          error: error
        })
      })
}


