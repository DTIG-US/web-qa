resource "azurerm_static_web_app" "signup" {
  name                = local.swa_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location

  sku_tier = "Free"
  sku_size = "Free"

  lifecycle {
    prevent_destroy = true
  }
}

data "azurerm_dns_zone" "main" {
  name                = var.dns_zone_name
  resource_group_name = var.dns_zone_resource_group
}

locals {
  # Extracts the subdomain prefix (e.g. "dev", "staging", "www") from the full domain name
  cname_record_name = replace(var.swa_custom_domain, ".${var.dns_zone_name}", "")
}

# Custom domain — uses TXT validation (Azure deprecated CNAME-only validation)
resource "azurerm_static_web_app_custom_domain" "signup_domain" {
  static_web_app_id = azurerm_static_web_app.signup.id
  domain_name       = var.swa_custom_domain
  validation_type   = "dns-txt-token"
}

# TXT ownership proof record — Azure validates this asynchronously
resource "azurerm_dns_txt_record" "signup_validation" {
  name                = "_dnsauth.${local.cname_record_name}"
  zone_name           = data.azurerm_dns_zone.main.name
  resource_group_name = data.azurerm_dns_zone.main.resource_group_name
  ttl                 = 3600

  record {
    value = azurerm_static_web_app_custom_domain.signup_domain.validation_token
  }
}

# CNAME routes traffic to the SWA (still required for subdomains)
resource "azurerm_dns_cname_record" "signup" {
  name                = local.cname_record_name
  zone_name           = data.azurerm_dns_zone.main.name
  resource_group_name = data.azurerm_dns_zone.main.resource_group_name
  ttl                 = 300
  record              = azurerm_static_web_app.signup.default_host_name
}
