export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0284c7',
    600: '#0369a1',
    900: '#0c4a6e',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
} as const;

export type Colors = typeof colors;