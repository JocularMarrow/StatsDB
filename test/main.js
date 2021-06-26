const fetch = require('node-fetch');

class Request {
  constructor(userId, password) {
    if (userId === undefined) {
      err('UserId cannot be empty');
    } else if (typeof userId !== 'string') {
      err('UserId has to be typeof string');
    }
    if (password === undefined) {
      err('Password cannot be empty');
    } else if (typeof password !== 'string') {
      err('Password has to be typeof string');
    }

    this.header = {
      credentials: 'include',
      headers: {
        Authorization:
          'Basic ' + new Buffer.from(userId + ':' + password).toString('base64')
      }
    };
  }

  config() {
    return new Promise((resolve, reject) => {
      fetch('https://api.statsdb.net/r6/config')
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  playerId(user) {
    return new Promise((resolve, reject) => {
      if (typeof user !== 'string') {
        reject('Wrong data type');
      }
      fetch(`https://api.statsdb.net/r6/player/${user}`, this.header)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  search(user, platform = 'pc', mode = 'fast') {
    return new Promise((resolve, reject) => {
      if (
        typeof platform !== 'string' ||
        typeof user !== 'string' ||
        typeof mode !== 'string'
      ) {
        reject('Wrong data type');
      }
      fetch(
        `https://api.statsdb.net/r6/${platform}/search/${user}/${mode}`,
        this.header
      )
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  player(user, platform = 'pc') {
    return new Promise((resolve, reject) => {
      if (typeof platform !== 'string' || typeof user !== 'string') {
        reject('Wrong data type');
      }
      fetch(
        `https://api.statsdb.net/r6/${platform}/player/${user}`,
        this.header
      )
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }

  leaderboard(platform = 'all') {
    return new Promise((resolve, reject) => {
      if (typeof platform !== 'string') {
        reject('Wrong data type');
      }
      fetch(`https://api.statsdb.net/r6/${platform}/leaderboard`, this.header)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }
}

function err(msg) {
  try {
    throw new Error(msg);
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  } finally {
    process.exit(1);
  }
}

module.exports = Request;
