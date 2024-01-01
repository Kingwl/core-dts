interface Uint8ArrayConstructor {
    fromBase64(base64: string, options?: { alphabet?: 'base64' | 'base64url' }): Uint8Array;
    fromHex(hex: string): Uint8Array;
}

interface Uint8Array {
    toBase64(options?: { alphabet?: 'base64' | 'base64url' }): string;
    toHex(): string;
}