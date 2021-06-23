# StatsDB
Official npm package for StatsDB.net API

# How to install
Run `npm install statsdb`

# Requirements
You must have a application so you can get a userId and password. To create one go to https://developers.statsdb.net/ and sign up with google or discord.

# Endpoints
* `.config()`
* `.leaderboard({all, pc, xbox, playstation})`
* `.player({nameOfUser}, {pc, xbox, playstation})` search multiple users by adding `,` between names (ds-jocular,poseidon.ase).
* `.playerId({profileIdOfUser})`
* `.search({nameOfUser}, {pc, xbox, playstation}, {fast, slow})`

# Example
```js
const statsdb = require('statsdb'),
	request = new statsdb({userId}, {password});

// Example 1
request.player('ds-jocular', 'pc')
	.then(data => {
  		console.log(data)
  	})
  	.catch(err => console.log(err));

// Example 2
(async () => {
	try {
		const data = request.player('ds-jocular', 'pc');
		console.log(data)
	} catch (err) {
		console.log(err)
	}
})();

```

# Errors
* 429 = Rate limit was reached for the period. You can request a higer limit by contacting ratelimit@statsdb.net.

* \*cannot be empty = Never passed a userId || password.

* \*has to be typeof string = typeof UserId && password must be typeof string.

* Wrong data type = All data passed to functions has to be typeof string.