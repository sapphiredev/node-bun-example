import '#setup';

import { SapphireClient } from '@sapphire/framework';
import { envParseString } from '@skyra/env-utilities';
import { GatewayIntentBits } from 'discord.js';

const client = new SapphireClient({
	intents: [GatewayIntentBits.Guilds],
});

await client.login(envParseString('DISCORD_TOKEN'));
