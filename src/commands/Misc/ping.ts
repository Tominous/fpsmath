import { Command, CommandOptions } from '@sapphire/framework'
import type { Message } from 'discord.js'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<CommandOptions>({
	aliases: ['pong'],
	description: 'Tests the latency',
	detailedDescription: `
	📝 **| Command Usage**
	→ fps-ping

	🖇️ **| Aliases**: \`pong\`
	`,
	requiredClientPermissions: ['SEND_MESSAGES'],
	cooldownLimit: 1,
	cooldownDelay: 0,
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const response = await message.channel.send('Ping...')
		const latency = response.createdTimestamp - message.createdTimestamp
		await response.edit(`Pong! Took me ${latency}ms.`)
	}
}
