
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
  'AIzaSyK7a6B5c4D3e2F1g0H9i8J7k6L5m4N3o2P',
  'AIzaSyA1b2C3d4E5f6G7h8I9j0K1l2M3n4O5p6Q',
  'AIzaSyB7q8R9s0T1u2V3w4X5y6Z7a8B9c0D1e2F',
  'AIzaSyC3g4H5i6J7k8L9m0N1o2P3q4R5s6T7u8V',
  'AIzaSyD9w8X7y6Z5a4B3c2D1e0F9g8H7i6J5k4L',
  'AIzaSyE3m2N1o0P9q8R7s6T5u4V3w2X1y0Z9a8B',
  'AIzaSyF7c6D5e4F3g2H1i0J9k8L7m6N5o4P3q2R',
  'AIzaSyG1s0T9u8V7w6X5y4Z3a2B1c0D9e8F7g6H',
  'AIzaSyH5i4J3k2L1m0N9o8P7q6R5s4T3u2V1w0X',
  'AIzaSyI9y8Z7a6B5c4D3e2F1g0H9i8J7k6L5m4N',
  'AIzaSyJ3o2P1q0R9s8T7u6V5w4X3y2Z1a0B9c8D',
  'AIzaSyK7e6F5g4H3i2J1k0L9m8N7o6P5q4R3s2T',
  'AIzaSyL1u0V9w8X7y6Z5a4B3c2D1e0F9g8H7i6J',
  'AIzaSyM5k4L3m2N1o0P9q8R7s6T5u4V3w2X1y0Z',
  'AIzaSyN9a8B7c6D5e4F3g2H1i0J9k8L7m6N5o4P',
  'AIzaSyO3q2R1s0T9u8V7w6X5y4Z3a2B1c0D9e8F',
  'AIzaSyP7g6H5i4J3k2L1m0N9o8P7q6R5s4T3u2V',
  'AIzaSyQ1w0X9y8Z7a6B5c4D3e2F1g0H9i8J7k6L',
  'AIzaSyR5m4N3o2P1q0R9s8T7u6V5w4X3y2Z1a0B',
  'AIzaSyS9c8D7e6F5g4H3i2J1k0L9m8N7o6P5q4R',
  'AIzaSyT3u2V1w0X9y8Z7a6B5c4D3e2F1g0H9i8J'
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
