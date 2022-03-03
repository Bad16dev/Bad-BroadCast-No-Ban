
const Discord = require("discord.js");

const client = new Discord.Client({
  intents: [
    "DIRECT_MESSAGES", "GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"
  ]
});




client.on("messageCreate", async message => {
  if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
  const [command, ...args] = message.content.slice(prefix.length).split(" ");
  if (command === "bc") {
if (!owners.includes(message.author.id))
      return message.reply(`**تريد تسوي بوت برودكاست**
__تقدر تسوي واحد من هنا__
https://bit.ly/3vApcDz 🔔`);//By Bad
    message.delete();
    if (!args[0]) return message.channel.send(`${prefix}${command} \`Message\` \n{u} __For Mention The User.__ 🔴`);
    const Array = message.guild.members.cache.toJSON();
    const next = () => {
      if (Array.length === 0) return message.channel.send(`**Done I Send The BroadCast. 🟢**`);
      Array[0].send(args.join(" ").split("{u}").join(Array[0])).catch(() => undefined)
      Array.shift();
      setTimeout(() => {
        next();
      }, Math.floor(Math.random() * (500)) + 500);
    }
    message.channel.send(`Sending Now.. :stopwatch:`);
    next(); 
  }
})

client.on("ready", () => {
console.clear();
console._log(`Don't Forget Subscribe In My Channel.`);
console._log(`Bad Start Now`);
  console._log(`Logged in as [ ${client.user.tag} ]`);
  client.user.setActivity(`By Bad. > Odqin Hope.#3890`);
  client.user.setStatus("dnd");
});

(log => {
  console._log = function (message, ...params) {
    if (typeof message != "object")
      return log(`[ Bad BroadCast Say : ] > ${message}`);
    else {
      log(`[ Bad BroadCast Say : ] > `);
      log(message);
	return;
    }
    log(message, ...params)
  }
})(console.log);
const {
  token,
  owners,
  prefix: prefix
} = require("./config");
client.login(require("./config").token).catch(err => console.log(chalk.red.bold(err)))
require("http").createServer((_, res) => res.end("Made By Odqin Hope.#3890\n\nTo Make The Bot Online 24h Join Discord Server Below..\n\n\nhttps://discord.gg/CkXfzjYVJw")).listen(8080)