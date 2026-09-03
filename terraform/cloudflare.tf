# Create a DNS record
resource "cloudflare_record" "example_com" {
  zone_id = var.cloudflare_zone_id
  name    = "example"   # Subdomain; use "@" for the root domain
  value   = "192.0.2.1" # The IPv4 address
  type    = "A"         # Record type (A, CNAME, MX, etc.)
  ttl     = 3600        # Time to live in seconds
  proxied = false       # Set to true to enable Cloudflare proxy
}
