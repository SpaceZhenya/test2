// Offline Story Generator

const prompts = [
    "A brave knight saves a princess from a dragon.",
    "A young witch learns her powers in a hidden village.",
    "An alien arrives on Earth and befriends a human child."
];

function generateStory() {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    return `Once upon a time, ${randomPrompt}`;
}

console.log(generateStory());