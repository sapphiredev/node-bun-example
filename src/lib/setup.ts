import { setup } from '@skyra/env-utilities';

setup({ path: new URL('../../.env', import.meta.url) });

declare module '@skyra/env-utilities' {
	// Add your environment variables here
	interface Env {
		DISCORD_TOKEN: string;
	}
}
