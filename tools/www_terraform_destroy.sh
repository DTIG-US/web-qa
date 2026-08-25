#!/bin/bash

# Get the absolute path to the Terraform directory relative to this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TERRAFORM_DIR="$SCRIPT_DIR/../src/terraform"

# 1. Destroy the SWA resource
TENANT="$1" # Same tenant prefix used during provisioning

cd "$TERRAFORM_DIR"

terraform workspace select $TENANT
terraform destroy -var="prefix=$TENANT" -auto-approve

# Optional: remove the workspace itself once resources are gone
terraform workspace select default
terraform workspace delete $TENANT
