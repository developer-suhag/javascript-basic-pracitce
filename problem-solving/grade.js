function gradeCalculation(marks) {
    if (marks >= 80 ) {
        console.log('Your Grade is A+. Congratualtion');
    }
    else if (marks >= 70) {
        console.log('Your Grade is A. Congratulation');
    }
    else if (marks >= 60) {
        console.log('Your Grade is A-. Congratulation and keep practice');
    }
    else if (marks >= 50) {
        console.log("Your Grade is B. That's not good enough. You have to do hardwork to improve your result");
    }
    else if (marks >= 40) {
        console.log("Your Grade is C. That's very bad, do hardwork");
    }
    else if (marks >= 33) {
        console.log('Kaner gor dia pass korcho mia');
    }
    else {
        console.log('Salar pola toi fail korsos, vat khas kise jonno?');
    }
}

let examResult = 99;

const getGrade = gradeCalculation(examResult);


let examResult2 = 79;

const getGrade2 = gradeCalculation(examResult2);


let examResult3 = 56;

const getGrade3 = gradeCalculation(examResult3);


let examResult4 = 64;

const getGrade4 = gradeCalculation(examResult4);


let examResult5 = 48;

const getGrade5 = gradeCalculation(examResult5);


let examResult7 = 35;

const getGrade7 = gradeCalculation(examResult7);

let examResult9 = 30;

const getGrade9 = gradeCalculation(examResult9);

