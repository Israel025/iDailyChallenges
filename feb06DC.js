//array 1
const texasss = [
    {
        Name: 'Mike',
        Age: 23,
        Gender: 'm',
        Us: false,
    },
    {
        Name: 'Liz',
        Age: 20,
        Gender: 'f',
        Us: true,
    },
    {
        Name: 'Chris',
        Age: 102,
        Gender: 'm',
        Us: true,
    },
    {
        Name: 'Chuloo',
        Age: 27,
        Gender: 'm',
        Us: false,
    },
    {
        Name: 'Annie',
        Age: 30,
        Gender: 'f',
        Us: true,
    },
];

//SOLUTIONS FOR ARRAY 1

//Part 1 – Find all users older than 24
function usersOver24(array){
    if (Array.isArray(array)){
        return array.filter((eachObj) => {
            if (typeof(eachObj) === "object"){
                return eachObj.Age > 24;
            }           
        });         
    }else{
        return 'Array Object expected';
    }
}
//console.log(usersOver24(texasss));

//Part 2 – Find the total age of all users
function overallAge(array){
    if (Array.isArray(array)){
        return array.map(function(eachUser){
            if (typeof(eachUser) === "object"){
                return eachUser.Age;
            }
        })
            .reduce(function(age1, age2){return age1 + age2}, 0)
    }else{
        return 'Array Object expected';
    }
}
//console.log(overallAge(texasss));

//Part 3 – List all female coders
function femaleUsers(array){
    if (Array.isArray(array)){
        return array.filter(eachObj => {
            if (typeof(eachObj) === "object"){
                return eachObj.Gender === 'f';
            }          
        });         
    }else{
        return 'Array Object expected';
    }
}
//console.log(femaleUsers(texasss));


//array 2
const newieyork = [
    {
        Name: 'Michelle',
        Age: 19,
        Coder:true,
        Gender: 'f',
        Us: true,
    },
    {
        Name: 'Sam',
        Age: 25,
        Coder:false,
        Gender: 'm',
        Us: false,
    },
    {
        Name: 'Ivy',
        Age: 26,
        Coder:true,
        Gender: 'f',
        Us: false,
    },
    {
        Name: 'Nick',
        Age: 32,
        Coder:true,
        Gender: 'm',
        Us: true,
    },
    {
        Name: 'Jim Beglin',
        Age: 65,
        Coder:false,
        Gender: 'm',
        Us: true,
    },
];

//SOLUTIONS FOR ARRAY 2

// Part 1 – List all users in US in ascending order
function usersUsAsc(array){
    if (Array.isArray(array)){
        let filteredArray =  array.filter((eachObj) => {
            if (typeof(eachObj) === "object"){
                return eachObj.Us === true;
            }           
        });    

        return filteredArray.sort(function(object1, object2){
            if (object1.Name < object2.Name){
                return -1;
            }else{
                return 1;
            }
      });    
    }else{
        return 'Array Object expected';
    }
}
//console.log(usersUsAsc(newieyork));

// Part 2 – Sort all users by age
function usersByAge(array){
    if (Array.isArray(array)){
        return array.map(function(eachUser){
            if (typeof(eachUser) === "object"){
                return array.sort(function(object1, object2){
                    if (object1.Age < object2.Age){
                        return -1;
                    }else{
                        return 1;
                    }
                });  
            }
        });
    }else{
        return 'Array Object expected';
    }
}
console.log(usersByAge(newieyork));


//array 3
const vegzas = [
    {
        Name: 'Charly',
        Age: 32,
        Coder:true,
        Gender: 'm',
    },
    {
        Name: 'Law',
        Age: 21,
        Coder:true,
        Gender: 'm',
    },
    {
        Name: 'Rosey',
        Age: 42,
        Coder:false,
        Gender: 'f',
    },
    {
        Name: 'Steph',
        Age: 18,
        Coder:true,
        Gender: 'f'
    },
    {
        Name: 'Jon',
        Age: 47,
        Coder:false,
        Gender: 'm',
    },
];




function grade(myList){
    //03- this is the map variable you created
    const studentGrade = myList.map(function(student){
      return student.grade;
    });
}