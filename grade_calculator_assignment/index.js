const english = document.getElementById('english')
const maths = document.getElementById('maths')
const physics = document.getElementById('physics')
const chemistry = document.getElementById('chemistry')
const computer = document.getElementById('computer')

const total = document.getElementById('_total')
const average = document.getElementById('_average')
const grade = document.getElementById('_grade')

const calculateGrade = document.getElementById('calculate-grade')

let gradeObt = ''


if (english.value == undefined) {
    english.value = 0
}
if (maths.value == undefined) {
    maths.value = 0
}
if (physics.value == undefined) {
    physics.value = 0
}
if (chemistry.value == undefined) {
    chemistry.value = 0
}
if (computer.value == undefined) {
    computer.value = 0
}


calculateGrade.addEventListener('click', () => {
    

    

    if ((english.value > 100 || english.value < 0) || 
    (maths.value > 100 || maths.value < 0) ||
    (physics.value > 100 || physics.value < 0) ||
    (chemistry.value > 100 || chemistry.value < 0) ||
    (computer.value > 100 || computer.value < 0)) {
        alert('Please enter marks in range of 100')
        return
    }

    let overallMarks = (+english.value + +maths.value + +physics.value + +chemistry.value + +computer.value)
    let overallAverage = overallMarks / 5



    if (overallAverage > 90) {
        gradeObt = 'A'
    }
    else if (overallAverage >= 80 && overallAverage <= 89) {
        gradeObt = 'B'
    }
    else if (overallAverage >= 70 && overallAverage <= 79) {
        gradeObt = 'C'
    }
    else if (overallAverage >= 60 && overallAverage <= 69) {
        gradeObt = 'D'
    }
    else if (overallAverage > 60) {
        gradeObt = 'F'
    }


    
    if (english.value < 35 || maths.value < 35 || physics.value < 35 || chemistry.value < 35 || computer.value < 35 ) {
        grade.textContent = `You Got F Grade`
        total.textContent  = `Total Marks: ${overallMarks}`
        average.textContent = `Your Average Marks Are ${overallAverage}`
    }

    if (overallAverage >= 90) {
        grade.textContent = `You Got ${gradeObt} Grade`
        total.textContent  = `Total Marks: ${overallMarks}`
        average.textContent = `Your Average Marks Are ${overallAverage}`
    }

    else if (overallAverage >= 80 && overallAverage <= 89) {
        grade.textContent = `You Got ${gradeObt} Grade`
        total.textContent  = `Total Marks: ${overallMarks}`
        average.textContent = `Your Average Marks Are ${overallAverage}`
    }

    else if (overallAverage >= 70 && overallAverage <= 79) {
        grade.textContent = `You Got ${gradeObt} Grade`
        total.textContent  = `Total Marks: ${overallMarks}`
        average.textContent = `Your Average Marks Are ${overallAverage}`
    }

    else if (overallAverage >= 60 && overallAverage <= 69) {
        grade.textContent = `You Got ${gradeObt} Grade`
        total.textContent  = `Total Marks: ${overallMarks}`
        average.textContent = `Your Average Marks Are ${overallAverage}`
    }

    else if (overallAverage > 60) {
        grade.textContent = `You Got ${gradeObt} Grade`
        total.textContent  = `Total Marks: ${overallMarks}`
        average.textContent = `Your Average Marks Are ${overallAverage}`
    }

})

