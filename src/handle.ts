export function handle<T>(promise: Promise<T>): Promise<[T, any]> {
    return promise
        .then((data) => [data, undefined] as [T, any])
        .catch((err) => Promise.resolve([undefined, err] as unknown as [T, any]));
}