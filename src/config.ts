import { ToolbarOptionFactory } from './toolbar';
import expandAll from './features/expand-all';

export interface IToolbarFeature {
    id: string;
    title: string;
    action: () => void;
}

export interface IPluginConfig {
    toolbarOptionFactory: ToolbarOptionFactory;
    features: IToolbarFeature[];
    scanFrequencyMs: number;
}

export const PLUGIN_CONFIG: IPluginConfig = {
    toolbarOptionFactory: (id: string, title: string, onClink: () => void): HTMLElement => {
        const button = document.createElement('button');
        button.id = id;
        button.textContent = title;
        button.style.top = '0px';
        button.style.right = '0px';
        button.style.bottom = '0px';
        button.style.padding = '6px 14px';
        button.style.zIndex = '9999';
        button.style.color = 'black';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        button.style.position = 'absolute';
        button.className = 'fxs-portal-hover';

        button.addEventListener('click', onClink);

        return button;
    },
    features: [expandAll],
    scanFrequencyMs: 1000,
};
