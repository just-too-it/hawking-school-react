interface ISelectorItem {
    id: number;
    value: string
}

export interface ISelector {
    title: string;
    list: ISelectorItem[]
}