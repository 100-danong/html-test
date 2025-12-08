[root@coself-2686 /]# systemctl status smb
● smb.service - Samba SMB Daemon
   Loaded: loaded (/usr/lib/systemd/system/smb.service; enabled; vendor preset: disabled)
   Active: active (running) since Fri 2025-12-05 14:34:52 KST; 2 days ago
     Docs: man:smbd(8)
           man:samba(7)
           man:smb.conf(5)
 Main PID: 10464 (smbd)
   Status: "smbd: ready to serve connections..."
    Tasks: 4
   CGroup: /system.slice/smb.service
           ├─10464 /usr/sbin/smbd --foreground --no-process-group
           ├─10466 /usr/sbin/smbd --foreground --no-process-group
           ├─10467 /usr/sbin/smbd --foreground --no-process-group
           └─10468 /usr/sbin/smbd --foreground --no-process-group

Dec 05 14:34:52 coself-2686.cafe24.com systemd[1]: Starting Samba SMB Daemon...
Dec 05 14:34:52 coself-2686.cafe24.com smbd[10464]: [2025/12/05 14:34:52.872143,  0] ../../lib/util/become_daemon.c:136(daemon_ready)
Dec 05 14:34:52 coself-2686.cafe24.com smbd[10464]:   daemon_ready: daemon 'smbd' finished starting up and ready to serve connections
Dec 05 14:34:52 coself-2686.cafe24.com systemd[1]: Started Samba SMB Daemon.
Dec 08 11:57:57 coself-2686.cafe24.com smbd[4093]: [2025/12/08 11:57:57.416704,  0] ../../source3/smbd/process.c:335(read_packet_remainder)
Dec 08 11:57:57 coself-2686.cafe24.com smbd[4093]:   read_fd_with_timeout failed for client 112.175.41.190 read error = NT_STATUS_END_OF_FILE.
[root@coself-2686 /]# systemctl status nmb
● nmb.service - Samba NMB Daemon
   Loaded: loaded (/usr/lib/systemd/system/nmb.service; enabled; vendor preset: disabled)
   Active: active (running) since Fri 2025-12-05 14:34:56 KST; 2 days ago
     Docs: man:nmbd(8)
           man:samba(7)
           man:smb.conf(5)
 Main PID: 10550 (nmbd)
   Status: "nmbd: ready to serve connections..."
    Tasks: 1
   CGroup: /system.slice/nmb.service
           └─10550 /usr/sbin/nmbd --foreground --no-process-group

Dec 05 14:34:56 coself-2686.cafe24.com systemd[1]: Starting Samba NMB Daemon...
Dec 05 14:34:56 coself-2686.cafe24.com nmbd[10550]: [2025/12/05 14:34:56.244206,  0] ../../lib/util/become_daemon.c:136(daemon_ready)
Dec 05 14:34:56 coself-2686.cafe24.com nmbd[10550]:   daemon_ready: daemon 'nmbd' finished starting up and ready to serve connections
Dec 05 14:34:56 coself-2686.cafe24.com systemd[1]: Started Samba NMB Daemon.
Dec 05 14:35:19 coself-2686.cafe24.com nmbd[10550]: [2025/12/05 14:35:19.272598,  0] ../../source3/nmbd/nmbd_become_lmb.c:397(become_local_master_stage2)
Dec 05 14:35:19 coself-2686.cafe24.com nmbd[10550]:   *****
Dec 05 14:35:19 coself-2686.cafe24.com nmbd[10550]:
Dec 05 14:35:19 coself-2686.cafe24.com nmbd[10550]:   Samba name server COSELF-2686 is now a local master browser for workgroup SAMBA on subnet 112.175.41.190
Dec 05 14:35:19 coself-2686.cafe24.com nmbd[10550]:
Dec 05 14:35:19 coself-2686.cafe24.com nmbd[10550]:   *****
[root@coself-2686 /]# ss -lnt | grep 445
LISTEN     0      50           *:445                      *:*
LISTEN     0      50        [::]:445                   [::]:*
[root@coself-2686 /]#
