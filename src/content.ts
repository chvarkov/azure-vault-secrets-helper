import { Toolbar } from './toolbar'
import expandAll from './features/expand-all'
import { PLUGIN_CONFIG } from './config'
import { AZURE_CONFIG } from './azure'

const initVaultSecretsFeatures = (toolbar: Toolbar) => {
    for (const feature of PLUGIN_CONFIG.features) {
        const existing = toolbar?.has(expandAll.id)

        if (existing) {
            return
        }

        toolbar?.addOption(feature.id, feature.title, feature.action)
    }
}

function main() {
    let toolbar = Toolbar.createIfExists(AZURE_CONFIG.toolbarSelector, PLUGIN_CONFIG.toolbarOptionFactory)

    setInterval(() => {
        const isVaultSecretsPage = AZURE_CONFIG.isVaultSecretsUrl(window.location.hash)

        if (!isVaultSecretsPage) {
            if (toolbar) {
                toolbar = undefined
            }
            return
        }

        if (!toolbar) {
            toolbar = Toolbar.createIfExists(AZURE_CONFIG.toolbarSelector, PLUGIN_CONFIG.toolbarOptionFactory)
        }

        toolbar && initVaultSecretsFeatures(toolbar)
    }, PLUGIN_CONFIG.scanFrequencyMs)
}

main()
