[root@coself-2686 /]# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED
ACCEPT     all  --  anywhere             anywhere
INPUT_direct  all  --  anywhere             anywhere
INPUT_ZONES_SOURCE  all  --  anywhere             anywhere
INPUT_ZONES  all  --  anywhere             anywhere
DROP       all  --  anywhere             anywhere             ctstate INVALID
REJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:microsoft-ds
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:microsoft-ds
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:netbios-ssn

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination
ACCEPT     all  --  anywhere             anywhere             ctstate RELATED,ESTABLISHED
ACCEPT     all  --  anywhere             anywhere
FORWARD_direct  all  --  anywhere             anywhere
FORWARD_IN_ZONES_SOURCE  all  --  anywhere             anywhere
FORWARD_IN_ZONES  all  --  anywhere             anywhere
FORWARD_OUT_ZONES_SOURCE  all  --  anywhere             anywhere
FORWARD_OUT_ZONES  all  --  anywhere             anywhere
DROP       all  --  anywhere             anywhere             ctstate INVALID
REJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
ACCEPT     all  --  anywhere             anywhere
OUTPUT_direct  all  --  anywhere             anywhere

Chain FORWARD_IN_ZONES (1 references)
target     prot opt source               destination
FWDI_public  all  --  anywhere             anywhere            [goto]
FWDI_public  all  --  anywhere             anywhere            [goto]

Chain FORWARD_IN_ZONES_SOURCE (1 references)
target     prot opt source               destination

Chain FORWARD_OUT_ZONES (1 references)
target     prot opt source               destination
FWDO_public  all  --  anywhere             anywhere            [goto]
FWDO_public  all  --  anywhere             anywhere            [goto]

Chain FORWARD_OUT_ZONES_SOURCE (1 references)
target     prot opt source               destination

Chain FORWARD_direct (1 references)
target     prot opt source               destination

Chain FWDI_public (2 references)
target     prot opt source               destination
FWDI_public_log  all  --  anywhere             anywhere
FWDI_public_deny  all  --  anywhere             anywhere
FWDI_public_allow  all  --  anywhere             anywhere
ACCEPT     icmp --  anywhere             anywhere

Chain FWDI_public_allow (1 references)
target     prot opt source               destination

Chain FWDI_public_deny (1 references)
target     prot opt source               destination

Chain FWDI_public_log (1 references)
target     prot opt source               destination

Chain FWDO_public (2 references)
target     prot opt source               destination
FWDO_public_log  all  --  anywhere             anywhere
FWDO_public_deny  all  --  anywhere             anywhere
FWDO_public_allow  all  --  anywhere             anywhere

Chain FWDO_public_allow (1 references)
target     prot opt source               destination

Chain FWDO_public_deny (1 references)
target     prot opt source               destination

Chain FWDO_public_log (1 references)
target     prot opt source               destination

Chain INPUT_ZONES (1 references)
target     prot opt source               destination
IN_public  all  --  anywhere             anywhere            [goto]
IN_public  all  --  anywhere             anywhere            [goto]

Chain INPUT_ZONES_SOURCE (1 references)
target     prot opt source               destination

Chain INPUT_direct (1 references)
target     prot opt source               destination

Chain IN_public (2 references)
target     prot opt source               destination
IN_public_log  all  --  anywhere             anywhere
IN_public_deny  all  --  anywhere             anywhere
IN_public_allow  all  --  anywhere             anywhere
ACCEPT     icmp --  anywhere             anywhere

Chain IN_public_allow (1 references)
target     prot opt source               destination
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh ctstate NEW,UNTRACKED
ACCEPT     udp  --  anywhere             anywhere             udp dpt:netbios-ns ctstate NEW,UNTRACKED
ACCEPT     udp  --  anywhere             anywhere             udp dpt:netbios-dgm ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:netbios-ssn ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:microsoft-ds ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:81 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:https ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:snpp ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:mysql ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:19100 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:13100 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:davsrc ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:trap-daemon ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:iua ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:6379 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ismserver ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:lrs-paging ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9910 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9920 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9901 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:sype-transport ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9922 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:cyborg-systems ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:gt-proxy ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:csms2 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:rtmp-port ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9840 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9841 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9301 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:board-roar ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:castorproxy ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9040 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:nm-asses-admin ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:mvs-capacity ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:silhouette ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:afs3-callback ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:stm_pproc ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9410 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9420 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:tip-app-server ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:9810 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:cslistener ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:micromuse-ncpw ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:terabase ctstate NEW,UNTRACKED
ACCEPT     udp  --  anywhere             anywhere             udp dpt:commplex-main ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:commplex-main ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:afs3-fileserver ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:irdmi ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:vcom-tunnel ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:trap ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:cisco-wafs ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:tripe ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:xfs ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:7110 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:7120 ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:microsoft-ds ctstate NEW,UNTRACKED
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:netbios-ssn ctstate NEW,UNTRACKED

Chain IN_public_deny (1 references)
target     prot opt source               destination

Chain IN_public_log (1 references)
target     prot opt source               destination

Chain OUTPUT_direct (1 references)
target     prot opt source               destination
[root@coself-2686 /]#
