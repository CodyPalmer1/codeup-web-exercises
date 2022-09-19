const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 2.Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const userWith3lang = users.filter(user => user.languages.length >= 3)
console.log(userWith3lang);


//3. Use .map to create an array of strings where each element is a user's email address

const emails = users.map(((email) => email));
console.log(emails);

// 4. Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

const yearsOfExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

const averageYearsOfExp = yearsOfExp / users.length;
console.log(yearsOfExp);
console.log(averageYearsOfExp);

// Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((email, user) => (email.length > user.email.length) ? email : user.email, "")
console.log(`Longest email ${longestEmail}`);

// 6. Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

const instructIntro = users.reduce((names, user, index) => {
    if (index != users.length - 1) {
        return `${names}${user.name}, `;
    } else {
        return `${names}and ${user.name}.`
    }
}, "Your instructors are: ");
console.log(instructIntro);
