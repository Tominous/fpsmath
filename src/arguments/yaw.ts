import { Argument, PieceContext, ArgumentContext } from '@sapphire/framework'
import { getObject } from '../helpers/array'

export class UserArgument extends Argument<number> {
	public constructor(context: PieceContext) {
		super(context, { name: 'yaw' })
	}

	public run(parameter: string, context: ArgumentContext) {
		let yaw: number
		if (isNaN(Number(parameter))) {
			if (getObject(parameter, 'yaw')) {
				yaw = Number(getObject(parameter, 'yaw'))
			} else {
				return this.error({
					parameter,
					message: 'Game not supported or a valid yaw value.',
					identifier: 'yawNoSupport',
					context,
				})
			}
		} else {
			yaw = Number(parameter)
		}
		return this.ok(yaw)
	}
}

declare module '@sapphire/framework' {
	interface ArgType {
		yaw: number
	}
}
