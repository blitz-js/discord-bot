import { token, botAdmins } from "./env"
import CookiecordClient from "cookiecord"
import { Intents } from "discord.js"

import { EtcModule } from "./modules/etc"
import { HelpChanModule } from "./modules/helpchan"
import { HelpModule } from "./modules/help"

const client = new CookiecordClient(
  {
    botAdmins,
    prefix: ["!", "t!"],
  },
  {
    ws: { intents: Intents.NON_PRIVILEGED },
    partials: ["REACTION", "MESSAGE", "USER", "CHANNEL"],
  }
)

for (const mod of [EtcModule, HelpChanModule, HelpModule]) {
  client.registerModule(mod)
}

client.login(token)
client.on("ready", () => console.log(`Logged in as ${client.user?.tag}`))
