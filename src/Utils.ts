export const validateHTML = (htmlContent: string) => {
    if (htmlContent === "<p><br></p>") return false
    return true
}