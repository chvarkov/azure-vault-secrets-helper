import { AZURE_CONFIG } from '../azure';

const attempts = 6;
const delayBetweenAttempts = 500;

export default {
    id: 'avsh_extension_expand_all_btn',
    title: 'Expand all',
    action: async () => {
        const timeout = (ms) => new Promise((fn) => setTimeout(fn, ms));

        let hasMore = true;

        do {
            let isClicked = false;

            for (let i = 1; i <= attempts; i++) {
                const btn = AZURE_CONFIG.getLoadMoreSecretsButton();

                btn?.click();

                isClicked = !!btn;
                await timeout(delayBetweenAttempts);

                if (isClicked) {
                    break;
                }
            }

            hasMore = !isClicked;
        } while (!hasMore);
    },
};
