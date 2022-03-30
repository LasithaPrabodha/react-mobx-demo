export class BaseService {
    protected post(url: string, body: any) {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
    }

    protected get(url: string) {
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}