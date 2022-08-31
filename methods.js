const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subject: ['Calculus', 'Algebra', 'Geometry'],
    exam: function () {
        return this.money + ' ' + 'is Your Exam Fee';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`;
    },
    treatDey: function (amount) {
        this.money = this.money - amount;
        return this.money;
    }
}
const output = student.exam();
// console.log(output);

const reExam = student.improveExam('Algebra');
// console.log(reExam);

const remainingTk = student.treatDey(900);
// console.log(remainingTk);
const againTreat = student.treatDey(400);
// console.log(againTreat);