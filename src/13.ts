export function getRandomTSCode(): string {
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomCode = "";
  for (let i = 0; i < 8; i++) {
    const charIndex = Math.floor(Math.random() * possibleChars.length);
    randomCode += possibleChars.charAt(charIndex);
  }
  return randomCode;
}
