// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./eric-gjertsen.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use filter function to return array of only male customers.
    var males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });// this will resolve to an array of only male customer objects.
    return males.length;
};

var femaleCount = function(array) {
    //use reduce function to return the number of female customers.
    var numFemales = _.reduce(array, function(females, customer, index){
        //determine if the current customer has a gender of female
        if (customer.gender === 'female'){
            //if true, add 1 to the numFemales accumulator value;
            females++; //females = females + 1
        }
        return females; 
    }, 0); // return the number of female customers;
    return numFemales;
};
var oldestCustomer = function (array){
    return _.reduce(array, function(oldPerson, customer, index){
        if (customer.age >= oldPerson.age){
            oldPerson = customer;
        }
        return oldPerson;
    }, array[0]).name;
}

var youngestCustomer = function (array){
    return _.reduce(array, function(youngPerson, customer, index){
        if (customer.age <= youngPerson.age){
            youngPerson = customer;
        }
        return youngPerson;
    }, array[0]).name;
};

var averageBalance = function (array){
    let totalBalance = 0;
    _.each(array, function(customer){
        let balNum = Number(customer.balance.replace(/[^0-9.-]+/g,""));
        totalBalance += balNum;
    });
    return totalBalance / array.length;    
};

var firstLetterCount = function (array, letter){
    let ans = 0;
    _.each(array, function(customer){
        if (customer.name.charAt(0).toUpperCase() === letter.toUpperCase()){
            ans++;
        }
    });
    return ans;
};

var friendFirstLetterCount = function(array, customer, letter){
    let count = 0;
    _.each(array, function(cust, index, collection){
        if (cust.name === customer){
            _.each(cust.friends, function(friend, index, collection){
                if (friend.name.charAt(0).toUpperCase() === letter.toUpperCase()){
                    count++;
                }
            });
        }
    });
    return count;
};

var friendsCount = function (array, name){
    let ans = [];
    _.each(array, function(customer, index, collection){
        _.each(customer.friends, function(friend, index, colleciton){
            if (friend.name === name){
                ans.push(customer.name);
            }
        });
    });
    return ans;
};

var topThreeTags = function (array){
    let ans = [];
    let result = [];
    let numOfTag = [];
    _.each(array, function(customer, index, collection){
        ans.push(customer.tags);
        _.unique(ans);
    });
    //console.log(ans);
    for (let i = 0; i < ans.length; i++){
        numOfTag.push(0);
    }
    _.each(array, function(customer, index, collection){
        _.each(customer.tags, function(tag, index, collection){
            _.each(ans, function(test, index, colleciton){
                if (tag === test){
                    numOfTag[index]++;
                }
            });
        });
    });
    //console.log(numOfTag);
    return result;

};

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
