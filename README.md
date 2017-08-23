# VotingX

Repo for the project "Building a Voting App" from freecodecamp.org.

[https://www.freecodecamp.org/challenges/build-a-voting-app](https://www.freecodecamp.org/challenges/build-a-voting-app)

### Demo:
[http://votingx-wilsonilo.c9users.io/](http://votingx-wilsonilo.c9users.io/d)

### Notes:
* Project uses Angular 2 + and other dependencies, check package.json
* I mainly use 4 enviroments vars to work with the app
	*  **proccess.env.MLABDB** which connects to the Mlab database.
	*  **proccess.env.APIKEYSEARCHGOOGLE** as a secret/salt for different parts of the app (can be whatever you want does not need to be an actual API Key from Google i just felt lazy)
	*  **proccess.env.FREECODECAMPTWITTERKEY** and **proccess.env.FREECODECAMPTWITTERSECRET** for the Twitter Auth API.   
*  Please check the issues, specially the one with passport-twitter.

### Cloud9 / Heroku / DigitalOcean / etc:
* Check your enviroment vars, this is are really important, usually an "export VAR=VALUE" or a set on .bashrc or .zshrc should be enough.
* Check that you have mongo and node in good shape, in the case of Cloud 9: sudo apt-get install mongodb-org should help you out. 


### Known Issues:
* On file server/api.js line 398 you have to use your exact callback url, there seems to be a problem with Twitter Callback and Passport, you can read more about it here: [https://github.com/jaredhanson/passport-twitter/issues/12](https://github.com/jaredhanson/passport-twitter/issues/12)
	
### Road:

I hope once i finish some projects get a little bit more security, design and details on the app.

### Versions:

* 1.0.0 (22/08/2017)