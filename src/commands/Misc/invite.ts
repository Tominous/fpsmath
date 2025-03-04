import type { Message } from 'discord.js'
import { MessageEmbed } from 'discord.js'
import { Command, CommandOptions } from '@sapphire/framework'
import { ApplyOptions } from '@sapphire/decorators'

@ApplyOptions<CommandOptions>({
	aliases: ['bot-invite'],
	description: 'Invite the bot to your sever',
	detailedDescription: `
	📝 **| Command Usage**
	→ fps-invite

	🖇️ **| Aliases**: \`invite\` and \`bot-invite\`
	`,
	generateDashLessAliases: true,
	requiredClientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
		const embed = new MessageEmbed().setColor('#0099ff').setDescription(`
				[Invite FPSMath to your server](https://discord.com/oauth2/authorize?client_id=${this.container.client.id}&scope=bot&permissions=19520) | [Join Support Server](https://discord.gg/Bg2gNT35s9)
                `)
		return message.reply({ embeds: [embed] })
	}
}
