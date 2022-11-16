export const C_Draft = []

export const getDrafts = async (url: string, method: string) => {
    return await fetch(url, {method: method})
        .then((response: Response) => response.json())
        .then((data: Response) => {
            return data;
        })
        .catch((error: Error) => {
            return error;
        });
}