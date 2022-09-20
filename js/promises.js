// console.log('Promise')
//
// function getUserLastCommit(username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//
//     console.log(url);
//
//     return fetch(url, {headers: {'Authorization': GITHUB_KEY}})
//         .then((response) => response.json())
//         .then((listOfEvents) => {
//             console.log(listOfEvents);
//             for (let event of listOfEvents) {
//                 if (event.type === 'PushEvent') {
//                     return event.created_at;
//                 }
//             }
//         })
// }
//
// console.log(getUserLastCommit('codypalmer1'));
// //.then( date => console.log('Last commit date: ', date) );
// document.querySelector('#getCommitDate').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('clicked');
//     const input = document.querySelector('#username');
//
//     console.log(input.value);
//     getUserLastCommit(input.value).then((date) => {
//         console.log(date);
//         const div = document.querySelector('#lastcommitdate');
//         div.innerHTML = `Last commit was on ${date}`;
//     });
// })

(() => {

        const userLastCommit = (username) => {
            fetch('https://api.github.com/users/' + ${username} + '/events', {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(resp => resp.json()).then(data => {
                console.log(data)
                const commits = data.filter(event => event.type === "PushEvent")
                console.log(`${username} had their last commit on ${commits[0].created_at}`);
            });
        }
        userLastCommit('codypalmer1');
        userLastCommit('crisalmendarez');

        // const wait = ms => new Promise(resolve => {
        //     setTimeout(resolve, ms);
        // });
        //
        // wait(1000).then(() => console.log("Your response resolved after 1 second!"))
        // wait(3000).then(() => console.log("Your response resolved after 3 seconds!"))

        const wait = ms => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                  if (!isNaN(parseInt(ms))) {
                      resolve(`You will see this after ${ms / 1000} second(s).`)
                  } else {
                      reject(`Failure to include proper numeric input.`)
                  }
              }, ms)
            });
        }
        wait(1000).then(message => console.log(message));
        wait(3000).then(message => console.log(message));
        wait(5000).then(message => console.log(message));
    }
)



// fetch(`https://api.github.com/users/username/events/public`, {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(resp => resp.json()).then(data => console.log(data));
