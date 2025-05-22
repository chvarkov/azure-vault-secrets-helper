export type ToolbarOptionFactory = (id: string, title: string, onClink: () => void) => HTMLElement
export type ToolbarElementSelector = () => Element | undefined

export class Toolbar {
    constructor(
        private readonly elem: Element,
        private readonly optionFactory: ToolbarOptionFactory
    ) {}

    addOption(id: string, title: string, handler: () => void): void {
        this.elem?.appendChild(this.optionFactory(id, title, handler))
    }

    has(id: string): boolean {
        return !!this.elem.querySelector(`#${id}`)
    }

    static createIfExists(selector: ToolbarElementSelector, optionFactory: ToolbarOptionFactory): Toolbar | undefined {
        const toolbarElem = selector()

        if (toolbarElem) {
            return new Toolbar(toolbarElem, optionFactory)
        }
    }
}
