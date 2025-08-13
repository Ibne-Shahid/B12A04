// Function for Problem-05

function resultReport(marks) {

    if (Array.isArray(marks) !== true) {
        return "Invalid"
    } else if (marks.length === 0) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        }
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

    let averageMark = Math.round(total / marks.length)

    const resultReport = {
        finalScore: averageMark,
        pass: passedSubs,
        fail: failedSubs
    }

    return resultReport
}
