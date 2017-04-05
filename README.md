# champ-check

Champ Check is a web application I am developing primarily as a project to learn React.js. It allows you to enter in a League of Legends summoner name to recieve the champion stats for a player. It pulls in only ranked data from season 7.

It is currently using React.js on the front end setup using `create-react-app` and Node.js on the back end with Axios to talk to the official League of Legends API.

To Do:

* Continue adding features
* Style champion stat displays maybe using some sort of visualization library
* Create a more detailed readme
* Make a streamlined start script and build process

I will also add that in the beginning, my API key was directly in the application code and not in a separate config file. The old API key has been reset and is no longer valid for security reasons. To add your own API key, make a config.js file in the root directory like:

```
config = {
  API_KEY: 'YOUR API KEY GOES HERE'
};

export default config;
```
