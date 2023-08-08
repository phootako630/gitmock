// Validate the url
export const isUrlValid = (url: string): boolean => {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name and extension
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?' + // port
        '(\\/[-a-z\\d%_.~+]*)*' + // path
        '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
        'i'
    );

    return pattern.test(url);
};

// Get the status label color
export const getStatusLabelColor = (status: string) => {
    if (!status || status.includes("Pending")) {
        return "text-yellow-500";
    } else if (status.includes("successful")) {
        return "text-green-500";
    } else {
        return "text-red-500";
    }
}
