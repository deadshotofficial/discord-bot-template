## Discord Bot Template
This is a basic code template for the latest Discord.js v14 and has a full slash_commands and events handler. 
And don't sue me for any errors please TwT.

## Requirements
* [Node.js](https://nodejs.org) - v16 or Higher
* [Discord.js](https://discord.js.org) - Latest

## Setting Up

### Important Note:
Make sure that your bot has the `applications.commands` application scope enabled, which can be found under the `OAuth2` tab on the [Developer Portal](https://discord.com/developers/applications) and don't forget to Enable the `GUILD_MEMBERS` and `MESSAGE_CONTENT` Intents which can be found under the `Bot` tab.

### Initialization
Clone the repository using 
```bash
git clone https://github.com/deadshotofficial/discord-bot-template.git
```
Install the required dependancies
```bash
# For the Pre-required
npm install

# For Additional
npm install <package_name>
```
In the `config.json` file, add your bot's token which can be found under the `Bot` tab in the Developer Portal
```bash
{
   "token": "YOUR_BOT_TOKEN_HERE"
}
```

### Running the bot
After the Initialization has been done, run the following command in the terminal (make sure terminal is open for the same parent folder)
```bash
node index.js or node .
```

### Deploying commands
Before you can use the bots slash command you first need to add them to your Discord server. You can use the `!deploy` command to do so.

## Contribution
We love contributors. If you want to contribute in adding some features, you can create a fork, add your features and send a Pull Request. We will be checking the additions and the added stuffs will duely be given credits.

## License
This open-sourced project is licensed in Github with [`Apache License 2.0`](LICENSE) and `Discord`.

## Author
* Owner: [DeadShot](https://github.com/deadshotofficial)
* Organisation: [Exynos](https://github.com/ExynosBot)
