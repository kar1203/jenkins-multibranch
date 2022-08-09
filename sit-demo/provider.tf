terraform {
  required_providers {
    huaweicloud = {
      source = "huaweicloud/huaweicloud"
      version = "1.38.2"
    }
  }
}

provider "huaweicloud" {
  access_key = "8PLOPETQDCPAUYKIYEMU"
  secret_key = "s9bhONqzowArfEFsO0INt5dTiSQRQERUhgdOEPeF"
  region     = "ap-southeast-3"
}