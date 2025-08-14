// Function for Problem-05

function resultReport(marks) {

    if (Array.isArray(marks) !== true) {
        return "Invalid"
    } 

    let total = 0;
    let passedSubs = 0;
    let failedSubs = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i]

        if (marks[i] >= 40) {
            passedSubs = passedSubs + 1
        } else {
            failedSubs = failedSubs + 1
        }

    }

    let average = 0;

    average = marks.length>0 ? Math.round(total/marks.length): 0;

    return {
        finalScore: average,
        pass: passedSubs,
        fail: failedSubs
    }

    
}

console.log(resultReport(100));
