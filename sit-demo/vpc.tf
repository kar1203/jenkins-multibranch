resource "huaweicloud_vpc" "vpc" {
  name = "devops-sit-vpc"
  cidr = "172.17.0.0/16"
}

# Create a subnet in which the cluster will run
resource "huaweicloud_vpc_subnet" "subnet1" {
  name       = "cce-subnet"
  cidr       = "172.17.10.0/23"
  gateway_ip = "172.17.10.1"
  vpc_id     = huaweicloud_vpc.vpc.id

  # DNS is required for CCE node installing
  primary_dns   = "100.125.1.250"
  secondary_dns = "100.125.129.250"
}

# Create a subnet in which the cluster will run
resource "huaweicloud_vpc_subnet" "subnet2" {
  name       = "rds-subnet"
  cidr       = "172.17.20.0/24"
  gateway_ip = "172.17.20.1"
  vpc_id     = huaweicloud_vpc.vpc.id

  # DNS is required for CCE node installing
  primary_dns   = "100.125.1.250"
  secondary_dns = "100.125.129.250"
  # depends_on = [huaweicloud_vpc_subnet.subnet3]
  # lifecycle {
  #   create_before_destroy = true
  # }
}