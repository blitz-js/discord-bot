import {
  command,
  default as CookiecordClient,
  Module,
  CommonInhibitors,
  optional,
} from "cookiecord"
import { Message, MessageEmbed } from "discord.js"

export class HelpModule extends Module {
  constructor(client: CookiecordClient) {
    super(client)
  }

  @command({
    aliases: ["help", "commands", "h"],
    inhibitors: [CommonInhibitors.guildsOnly],
    description: "Sends what you're looking at right now",
  })
  async help(msg: Message, @optional cmdTrigger?: string) {
    if (!msg.guild) return

    if (!cmdTrigger) {
      let embed = new MessageEmbed()
        .setAuthor(msg.guild.name, msg.guild.iconURL({ dynamic: true }) || undefined)
        .setTitle("Bot Usage")
        .setDescription(
          `Hello ${msg.author.username}! Here is a list of all commands in me! To get detailed description on any specific command, do \`help <command>\``
        )
        .addField(
          `**Misc Commands:**`,
          `\`help\` ► View a list of all commands!\n\`ping\` ► View the latency of the bot\n\`ask\` ► Sends a message with a link for [dontasktoask.com](https://dontasktoask.com)\n`
        )
        .addField(
          `**Help Channel Commands:**`,
          `\`close\` ► Close a __ongoing__ help channel opened by you!`
        )
        .setFooter(this.client.user?.username, this.client.user?.displayAvatarURL())
        .setTimestamp()

      return await msg.channel.send(embed)
    } else {
      const cmd = this.client.commandManager.getByTrigger(cmdTrigger)
      await msg.channel.send(
        `Usage: \`${cmd?.triggers.join("|")}${cmd?.args.length ? " " : ""}${cmd?.args.map((arg) =>
          arg.optional ? `[${arg.type.name}]` : `<${arg.type.name}>`
        )}\`${cmd?.description ? `\nDescription: *${cmd?.description}*` : ""}`
      )
    }
  }
}
