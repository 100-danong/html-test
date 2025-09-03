SELECT cifs_call_id, cifs_error_code
        FROM call_info_fail_start
        WHERE cifs_call_id = '27553318'
        ORDER BY cifs_id DESC
        LIMIT 1
