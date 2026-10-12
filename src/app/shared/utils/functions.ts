
/**
 * Validates a string input
 * @param input Text to validate 
 * @returns exist or not
 */
export function validateString(input: string): boolean {
    if (input == null || input == undefined || input.trim() === '') {
        return false;
    }
    return true;
}