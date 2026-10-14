import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const routes = ['privacy', 'terms', 'lead-engine']
const config = JSON.parse(await readFile(new URL('vercel.json', root), 'utf8'))
for (const route of routes) {
  const page = await readFile(new URL(`dist/${route}/index.html`, root), 'utf8')
  assert.match(page, /<html lang="en">/)
  assert.match(page, /<h1>[^<]+<\/h1>/)
  assert.match(page, /href="\/legal\.css"/)
  assert.match(page, /mailto:eclipsodigital@gmail\.com/)
  assert.doesNotMatch(page, /<script\b/i, 'Policies and overview must remain readable without JavaScript')
  assert.doesNotMatch(page, /GMAIL_REFRESH_TOKEN|GMAIL_CLIENT_SECRET|sbp_fc/, 'Private credentials must never enter public pages')
  for (const path of [`/${route}`, `/${route}/`]) {
    assert.ok(config.rewrites.some(rule => rule.source === path && rule.destination === `/${route}/index.html`))
  }
}
await readFile(new URL('dist/legal.css', root))
const privacy = await readFile(new URL('dist/privacy/index.html', root), 'utf8')
assert.match(privacy, /Google API Services User Data Policy/)
assert.match(privacy, /Limited Use requirements/)
assert.match(privacy, /Supabase/)
assert.match(privacy, /Web3Forms/)
assert.match(privacy, /does not have an automatic deletion timetable/)
const footer = await readFile(new URL('src/components/Footer.jsx', root), 'utf8')
for (const route of routes) assert.ok(footer.includes(`href='/${route}/'`))
assert.equal(config.rewrites.at(-1).source, '/(.*)', 'Retain the existing SPA fallback after explicit policy routes')
console.log('Policy checks passed: three standalone pages, homepage links, hosting routes, disclosures, and no embedded credentials.')
