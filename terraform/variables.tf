variable "environment" {
  type = string
}

variable "dns_zone_name" {
  type = string
}

variable "dns_zone_resource_group" {
  type = string
}

variable "swa_custom_domain" {
  type        = string
  description = "The full custom domain name for the Static Web App"
}
