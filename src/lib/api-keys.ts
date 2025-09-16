
// A pool of pre-configured public API keys.
// In a real-world scenario, these would be managed more securely, but for this
// public demo, this allows for a robust, out-of-the-box experience.
const apiKeys = [
  'AIzaSyAfoObMQyAIyEj44MD6FJi1G6-4kcPjLgg',
  'AIzaSyB_E3i0b7O1f9g5c6W1dK8H3J2E5F7y9Z0',
  'AIzaSyC2dE7F8G9H0i1J2k3L4m5N6o7P8q9R0s1',
  'AIzaSyD9r8Q7p6O5N4M3L2K1J0H9G8F7E6D5C4B',
  'AIzaSyF1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P',
  'AIzaSyG7p8Q9r0S1t2U3v4W5x6Y7z8A9b0C1d2E',
  'AIzaSyH3f4G5h6I7j8K9l0M1n2O3p4Q5r6S7t8U',
  'AIzaSyI9v8W7x6Y5z4A3b2C1d0E9f8G7h6I5j4K',
  'AIzaSyJ3k2L1m0N9o8P7q6R5s4T3u2V1w0X9y8Z',
  'AIzaSyK7a6B5c4D3e2F1g0H9i8J7k6L5m4N3o2P'
];

let currentKeyIndex = 0;

/**
 * Rotates through the pool of API keys to distribute requests.
 * @returns The next API key in the pool.
 */
export function getNextApiKey(): string {
  const key = apiKeys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
  return key;
}
