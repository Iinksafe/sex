const { Client, GatewayIntentBits } = require("discord.js");

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ],
}), prefix = "?";

// Events
bot.on("ready", () => console.log(`[34m${bot.user.tag}[0m is now ready!\n\t[35m>> Start party: ${prefix}sex[0m`))

// Commands
bot.on("message", event => {
  if (!event.startsWith(prefix + "sex")) return;

  let random = [
    "Fuck me hard", 
    "Im so horny for you", 
    "Ugh yeah ugh yeah", 
    "Push it in harder", 
    "Fuck me!", 
    "I wanna fuck you", 
    "Lets have sex", 
    "Give me a blowjob", 
    "Give me a rimjob", 
    "Give me some head", 
    "Lemme suck you off"
  ]
  
  event.send(person.mention + " " + random[Math.floor(Math.random() * random.length)])
})

// Check for tokens
if (undefined === process.env.Token) throw new TypeError("There are no tokens saved in the Secrets tab.");

// Run the bot
bot.login(process.env.Token)
