const {Student} = require('./Student')
const {Teacher} = require('./Teacher')

const student = new Student({
    name: 'Vlad',
    age: 26,
    gender: 'M',
    interests: 'programming',
})
student.greeting()
const teacher = new Teacher({
    name: 'Oleg',
    age: 29,
    gender: 'M',
    interests: 'teach',
    subject: 'JS Pro',
})
teacher.greeting()