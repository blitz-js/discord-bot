import dotenv from "dotenv-safe"
dotenv.config()

export const token = process.env.TOKEN!
export const botAdmins = process.env.BOT_ADMINS!.split(",")

export const categories = {
  ask: process.env.ASK_CATEGORY!,
  ongoing: process.env.ONGOING_CATEGORY!,
  dormant: process.env.DORMANT_CATEGORY!,
}

export const hasHelpChannelRoleId = process.env.HAS_HELP_CHANNEL_ROLE_ID!

export const askHelpChannelId = process.env.ASK_HELP_CHANNEL!

export const channelNames = process.env.CHANNEL_NAMES!.split(",")

export const dormantChannelTimeout = parseInt(process.env.DORMANT_CHANNEL_TIMEOUT!)
export const dormantChannelLoop = parseInt(process.env.DORMANT_CHANNEL_LOOP!)

export const ongoingEmptyTimeout = parseInt(process.env.ONGOING_EMPTY_TIMEOUT!)

export const BLITZ_PURPLE = "#4c00ab"
export const GREEN = "#77b155"
