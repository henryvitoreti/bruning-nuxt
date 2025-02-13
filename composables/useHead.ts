const PREFIX = 'Bruning | ';
export const defaultHead = (suffixTitle: string) => {
    useHead({
        title: PREFIX + suffixTitle
    });
}