import posthog from 'posthog-js'
import { browser } from '$app/environment';

export const load = async () => {

  if (browser) {
    posthog.init(
      'phc_Dlmugsfjscm4E4OMw74c12IsFEmmcpJSwDCSR4Bxz6u',
      { api_host: 'https://eu.i.posthog.com',
        capture_pageview: false,
        capture_pageleave: false
       }
    )
  }
  return
};