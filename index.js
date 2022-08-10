fetch('https://www.breakingbadapi.com/api/characters')
.then( (r) => r.json())
.then((data) => console.log(data))