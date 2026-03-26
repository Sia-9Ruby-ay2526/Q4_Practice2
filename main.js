function checkGrade(){

    let grade = Number(document.getElementById("grade").value);

    if (grade >= 94 && grade <= 100){
        window.alert ("Excellent");
    }

    else if (grade >= 87 && grade <= 93){
        window.alert ("Above Average");
    }

    else if (grade >= 80 && grade <= 86){
        window.alert ("Average");
    }

    else if (grade >= 75 && grade <= 79){
        window.alert ("Needs Improvement");
    }

    else {
        window.alert ("Failed");
    }

    }
    
 