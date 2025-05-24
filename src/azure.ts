import { ToolbarElementSelector } from './toolbar';

export interface IAzureConfig {
    toolbarSelector: ToolbarElementSelector;
    getLoadMoreSecretsButton: () => HTMLButtonElement | undefined;
    isVaultSecretsUrl: (url: string) => boolean;
}

export const AZURE_CONFIG: IAzureConfig = {
    toolbarSelector: () => document.getElementsByClassName('azc-toolbar')?.[0],
    getLoadMoreSecretsButton: (): HTMLButtonElement | undefined => {
        const btn = document.querySelector('.azc-grid-pageable-loadMoreContainer') as HTMLButtonElement | undefined;

        if (!btn || btn.classList.contains('fxs-display-none')) {
            return;
        }

        return btn;
    },
    isVaultSecretsUrl: (url) => url.includes('/Microsoft.KeyVault/vaults') && url.includes('/secrets'),
};
