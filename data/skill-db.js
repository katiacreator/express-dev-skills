export { 
	find,
  findById, create, findByIdAndDelete
}

const skills = [
  {text: 'build basic website in HTML5, CSS3, and Vanilla Javascript', done: true, _id: 322521},
  {text: 'build browser games with JS', done: true, _id: 409721},
  {text: 'DOM manipulation', done: true, _id: 806139},
  {text: 'experience with CSS frameworks', done: true, _id: 306489},
  {text: 'database management with PostgreSQL', done: false, _id: 618444},
  {text: 'experience with JS libraries', done: true, _id: 613009},
  {text: 'build websites with MEN stack', done: false, _id: 200999},
]

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the skill object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedskill = skills.splice(idx, 1)
    if (!deletedskill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedskill[0])
  } catch(error) {
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}




