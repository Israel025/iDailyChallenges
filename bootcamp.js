
const bootcamp = [
    {
        name: "Israel",
        class: "400 level",
        age: 23,
        subjects:{
            math:  100,
            english: 100,
            art: 100,
        },
    },

    {
        name: "Mayowa",
        class: "200 level",
        age: 21,
        subjects:{
            math:  60,
            english: 80,
            art: 50,
        },
    },

    {
        name: "James",
        class: "100 level",
        age: 65,
        subjects:{
            math:  80,
            english: 75,
            art: 65,
        },
    },

    {
        name: "Taio",
        class: "300 level",
        age: 19,
        subjects:{
            math:  100,
            english: 80,
            art: 60,
        },
    },

    {
        name: "Sorgan",
        class: "200 level",
        age: 55,
        subjects: {
            math:  60,
            english: 80,
            art: 70,
        },
    },
];

function stats(studentsArray = []){
    let totalEngishScores = 0;
    let totalArtScores = 0;
    let totalMathScores = 0;
    if(!Array.isArray(studentsArray)){
        return; //stop the execution of the function
    }

    studentsArray.forEach(function(element){
        if(element.age < 50){
            totalMathScores += element.subjects.math;
            totalEngishScores += element.subjects.english;
            totalArtScores += element.subjects.art;
        }
    });

    console.log(
        ` Total English Scores = ${totalEngishScores}\n`,
        `Total Maths Scores = ${totalMathScores}\n`,
        `Total Art Scores = ${totalArtScores}`
    );
}


function MandSstats(studentsArray = []){
    let totalMSEngishScores = 0;
    let totalMSArtScores = 0;
    let totalMSMathScores = 0;
    if(!Array.isArray(studentsArray)){
        return; //stop the execution of the function
    }

    studentsArray.forEach(function(element){
        if(element.name[0] === "M" || element.name.startsWith("S")){
            totalMSMathScores += element.subjects.math;
            totalMSEngishScores += element.subjects.english;
            totalMSArtScores += element.subjects.art;
        }
    });

    console.log(
        ` Total M and S English Scores = ${totalMSEngishScores}\n`,
        `Total M and S Maths Scores = ${totalMSMathScores}\n`,
        `Total M and S Art Scores = ${totalMSArtScores}`
    );
}

function averageAndReplace(studentsArray = []){
    let totalEnglishScores = 0;
    let totalArtScores = 0;
    let totalMathScores = 0;
    if(!Array.isArray(studentsArray)){
        return; //stop the execution of the function
    }

    studentsArray.forEach(function(element){
            totalMathScores += element.subjects.math;
            totalEnglishScores += element.subjects.english;
            totalArtScores += element.subjects.art;
    });

    let mathAverage = (totalMathScores/studentsArray.length).toFixed(1);
    let englishAverage = (totalEnglishScores/studentsArray.length).toFixed(1);
    let artAverage = (totalArtScores/studentsArray.length).toFixed(1);

    console.log(
        ` Total English Average Score = ${englishAverage}\n`,
        `Total Maths Average Score = ${mathAverage}\n`,
        `Total Art Average Score = ${artAverage}`
    );

    studentsArray.forEach(function(element){
        element.subjects.math *= mathAverage;
        element.subjects.art *= artAverage;
        element.subjects.english *= englishAverage;
    });

    console.log(studentsArray);
}

//stats(bootcamp);
//MandSstats(bootcamp);

averageAndReplace(bootcamp);