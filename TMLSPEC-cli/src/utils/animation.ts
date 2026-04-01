import * as readline from 'node:readline';

const tmlArt = [
  "   ______      ___   ___    ____   ",
  "  /      |    |   \\ /   |  |    |  ",
  " |__    __|   |    v    |  |    |  ",
  "    |  |      |         |  |    |  ",
  "    |  |      |  |\\_/|  |  |    |___",
  "    |__|      |__|   |__|  |________|"
];

function getCyberpunkColor(x: number, y: number, frame: number): string {
  // A sweeping color wave effect (Cyan -> Blue -> Purple)
  const frequency = 0.3;
  const speed = 0.5;
  const phase = (x * frequency) - (frame * speed) + (y * 0.5);
  
  // Calculate RGB using sine waves
  const r = Math.floor(Math.sin(phase) * 127 + 128);       // 0-255
  const g = Math.floor(Math.sin(phase + 2) * 127 + 128);   // Offset for color variation
  const b = 255;                                           // Keep blue high for cyberpunk feel

  return `\x1b[38;2;${r};${g};${b}m`;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function playIntroAnimation(): Promise<void> {
  const frames = 30; // More frames for smoother animation
  
  // Clear screen
  process.stdout.write('\x1b[2J\x1b[0f');

  for (let frame = 0; frame <= frames; frame++) {
    let output = '\x1b[H\n\n'; // Move cursor to top left and add padding
    
    for (let y = 0; y < tmlArt.length; y++) {
      const line = tmlArt[y];
      output += '    '; // Padding
      for (let x = 0; x < line.length; x++) {
        const char = line[x];
        // Apply color only to non-space characters for cleaner look,
        // or apply to all for a uniform block
        if (char !== ' ') {
          output += `${getCyberpunkColor(x, y, frame)}${char}`;
        } else {
          output += char;
        }
      }
      output += '\x1b[0m\n'; // Reset color at end of line
    }
    
    output += '\n\n';
    if (frame === frames) {
      // Blinking or highlighted prompt
      output += `    \x1b[1;36m[ Press Enter to initialize AI workspace ]\x1b[0m\n`;
    }
    
    process.stdout.write(output);
    await sleep(40);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('', () => {
      rl.close();
      resolve();
    });
  });
}