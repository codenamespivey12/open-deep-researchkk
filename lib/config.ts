export const CONFIG = {
  // Rate limits (requests per minute)
  rateLimits: {
    enabled: true, // Flag to enable/disable rate limiting
    search: 10,
    contentFetch: 20,
    reportGeneration: 5,
    agentOptimizations: 10,
  },

  // Search settings
  search: {
    resultsPerPage: 10,
    maxSelectableResults: 3,
    provider: 'exa' as 'google' | 'bing' | 'exa', // Default search provider
    safeSearch: {
      google: 'active' as 'active' | 'off',
      bing: 'moderate' as 'moderate' | 'strict' | 'off',
    },
    market: 'en-US',
  },

  // AI Platform settings
  platforms: {
    google: {
      enabled: true,
      models: {
        'gemini-2.5-flash-preview-05-20': {
          enabled: true,
          label: 'Gemini 2.5 Flash',
        },  
      },
    },
    openai: {
      enabled: true,
      models: {
        'o3': {
          enabled: true,
          label: 'o3',
        },
      },
    },
  },
} as const
