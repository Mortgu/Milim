export const C_Draft = [
    { _id: "", fileName: "Loading...", meta: { lastUpdatedAt: "loading..."} },
    { _id: "", fileName: "Loading...", meta: { lastUpdatedAt: "loading..."} },
    { _id: "", fileName: "Loading...", meta: { lastUpdatedAt: "loading..."} },
    { _id: "", fileName: "Loading...", meta: { lastUpdatedAt: "loading..."} },
    { _id: "", fileName: "Loading...", meta: { lastUpdatedAt: "loading..."} },
    { _id: "", fileName: "Loading...", meta: { lastUpdatedAt: "loading..."} }
]

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