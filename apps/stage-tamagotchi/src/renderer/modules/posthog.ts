import posthog from 'posthog-js'

import { DEFAULT_POSTHOG_CONFIG, POSTHOG_PROJECT_KEY_DESKTOP } from '../../../../../posthog.config'

// PostHog analytics disabled by default for privacy
// To enable, set VITE_ENABLE_POSTHOG=true in environment
if (import.meta.env.VITE_ENABLE_POSTHOG === 'true') {
  posthog.init(POSTHOG_PROJECT_KEY_DESKTOP, {
    ...DEFAULT_POSTHOG_CONFIG,
    // Project-specific config...
  })
}
