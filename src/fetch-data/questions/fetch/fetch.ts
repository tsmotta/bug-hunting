/**
 * Mock data that is returned from server
 */
const mockData = {
  name: "Duval",
  message: "Go away, I am the spaghetti 🎆"
};

/**
 * 'fetch' data from server
 */
export const getResource = (): Promise<typeof mockData> =>
  new Promise((res) => setTimeout(() => res(mockData), 1500));
