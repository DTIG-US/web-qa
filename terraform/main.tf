variable "location" {
  type    = string
  default = "Central US"
}

resource "azurerm_resource_group" "rg" {
  name     = "IH-WWW-${upper(var.environment)}"
  location = var.location
}

locals {
  swa_name = "ih-www-${upper(var.environment)}"
}
