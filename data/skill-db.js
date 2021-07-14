export { 
	find,
  findById, create
}

const skills = [
  {text: 'builds basic websites in HTML5, CSS3, and Vanilla Javascript', done: true, _id: 322521},
  {text: 'builds browser games with JS', done: true, _id: 409721},
  {text: 'DOM manipulation', done: true, _id: 806139},
  {text: 'experience with CSS frameworks', done: true, _id: 806139},
  {text: 'experience with JS libraries', done: true, _id: 806139},
  {text: 'builds websites with MEN stack', done: false, _id: 806139},
  {text: 'datbase management with MongoDB', done: true, _id: 806139},
  {text: 'datbase management with MySQL', done: true, _id: 806139},
  {text: 'can build a website with React', done: false, _id: 806139},
  {text: 'can build a website with Python', done: false, _id: 806139},
]

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

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000
  // New skills wouldn't be done
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}