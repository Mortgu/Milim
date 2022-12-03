export const C_Draft = []

export class DraftHandler {
    private method: string;
    private readonly url: string;

    private filterString: string = "";
    private filterValue: string = "";

    constructor(url: string, method: string) {
        this.url = url;
        this.method = method;
    }

    filter = (key: string, value: any) => {
        this.filterValue = value.toString();
        this.filterString = key;

        return this;
    }

    build = async (callback: Function) => {
        const url = this.url + `?${this.filterString}=${this.filterValue}`;

        return await fetch(url, { method: this.method })
            .then((response: Response) => response.json())
            .then((data: Response) => callback(data))
            .catch((error: Error) => callback(error));
    }
}