firewall-cmd --add-port=8100/tcp --permanent
firewall-cmd --add-port=8120/tcp --permanent
firewall-cmd --reload
firewall-cmd --list-ports
