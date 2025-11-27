    <update id="UpdateGroupcallInfoWhenDeliveryQuit" parameterType="java.util.Map">
        UPDATE groupcall_info
           SET
               gci_last_endtime = #{gciLastEndTime},
               gci_gogo_total_balance = #{gciGogoTotalBalance},
               gci_total_balance = #{gciTotalBalance},
               gci_total_time = #{updTotalTime},
               gci_upd_time = #{gciUpdTime}
         WHERE gci_groupId = #{gciGroupId}
    </update>

    int resUpdtGroupcallInfo = groupCallMapper.UpdateGroupcallInfoWhenDeliveryQuit(groupId, completeTime, gogoBalance, kbBalance, runMinute, updTime);
