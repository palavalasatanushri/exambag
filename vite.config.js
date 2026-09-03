import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['icon-*.png', 'pwa-192x192.png', 'pwa-512x512.png', 'apple-touch-icon.png', 'screenshot1.png', 'screenshot-wide.png'],
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
      },
      manifest: {
        id: '/',
        name: 'Exambag - Study Hub',
        short_name: 'Exambag',
        description: 'Your college study hub for PDFs, Notes, Question Papers, AI Chats, Communities and more.',
        theme_color: '#2D4A3E',
        background_color: '#EDF4F0',
        display: 'standalone',
        display_override: ['standalone', 'minimal-ui', 'window-controls-overlay', 'tabbed'],
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        lang: 'en',
        dir: 'ltr',
        categories: ['education', 'productivity'],
        prefer_related_applications: false,
        iarc_rating_id: 'e84b072d-71b3-4d3e-86ae-31a8ce4e53b7',
        note_taking: {
          new_note_url: '/'
        },
        launch_handler: {
          client_mode: 'focus-existing'
        },
        share_target: {
          action: '/',
          method: 'GET',
          params: {
            title: 'title',
            text: 'text',
            url: 'url'
          }
        },
        file_handlers: [
          {
            action: '/',
            accept: {
              'application/pdf': ['.pdf'],
              'image/png': ['.png'],
              'image/jpeg': ['.jpg', '.jpeg']
            }
          }
        ],
        protocol_handlers: [
          {
            protocol: 'web+Exambag',
            url: '/?protocol=%s'
          }
        ],
        related_applications: [
          {
            platform: 'play',
            url: 'https://play.google.com/store/apps/details?id=com.Exambag.studyhub',
            id: 'com.Exambag.studyhub'
          }
        ],
        edge_side_panel: {
          preferred_width: 400
        },
        scope_extensions: [
          { origin: 'https://rohit6758-Exambag-n51bhadsj-rohit6758s-projects.vercel.app' }
        ],
        widgets: [
          {
            name: 'Exambag Study Widget',
            short_name: 'Exambag',
            description: 'Quick access to your study resources',
            tag: 'Exambag-widget',
            template: 'Exambag-widget',
            ms_ac_template: 'widget/Exambag-widget.json',
            data: '/',
            type: 'application/json',
            screenshots: [{ src: 'screenshot1.png', sizes: '512x512', label: 'Exambag widget' }],
            icons: [{ src: 'icon-128x128.png', sizes: '128x128' }]
          }
        ],
        icons: [
          { src: 'icon-72x72.png',   sizes: '72x72',   type: 'image/png' },
          { src: 'icon-96x96.png',   sizes: '96x96',   type: 'image/png' },
          { src: 'icon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'icon-144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icon-152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'pwa-192x192.png',  sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: 'icon-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512x512.png',  sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ],
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Exambag Study Hub Home Screen'
          },
          {
            src: 'screenshot-wide.png',
            sizes: '1024x512',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Exambag Study Hub Desktop View'
          }
        ],
        shortcuts: [
          {
            name: 'Open Hub',
            short_name: 'Hub',
            description: 'Open your study hub',
            url: '/'
          },
          {
            name: 'Community',
            short_name: 'Groups',
            description: 'Open communities',
            url: '/explore'
          }
        ]
      }
    })
  ],
})
