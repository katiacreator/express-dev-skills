export { 
	find,
  findById, create
}

const skills = [
  {text: 'build basic website in HTML5, CSS3, and Vanilla Javascript', done: true, _id: 322521},
  {text: 'build browser games with JS', done: true, _id: 409721},
  {text: 'DOM manipulation', done: true, _id: 806139},
  {text: 'experience with CSS frameworks', done: true, _id: 306489},
  {text: 'database management with PostgreSQL', done: false, _id: 618444},
  {text: 'experience with JS libraries', done: true, _id: 613009},
  {text: 'build websites with MEN stack', done: false, _id: 200999},
  /* {text: 'database management with MongoDB', done: true, _id: 977324},
  {text: 'database management with MySQL', done: true, _id: 311299},
  {text: 'can build a website with React', done: false, _id: 134249},
  {text: 'can build a website with Python', done: false, _id: 980613}, */
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