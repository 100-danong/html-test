    <select id="findSellerPolicyNumberByCmpcd" parameterType="java.util.Map" resultType="com.gogofnd.kb.partner.seller.entity.SellerPolicyNumber">
        SELECT *
        FROM seller_policy_number
        WHERE si_cmp_code = #{siCmpCode}
        AND spn_apply_state = #{spnApplyState}
    </select>

    @NoArgsConstructor
@Getter
@Table("seller_policy_number")
public class SellerPolicyNumber {
    @Id
    private Long spnId = 0L;

    private String siCmpCode;

    private String spnPolicyNumber;

    private String spnApplicationNumber;

    private String spnInsuImgpath;

    private String spnApplyState;

    private LocalDateTime spnEffectStartdate;

    private LocalDateTime spnEffectEnddate;

    private String spnWriter;

    private Integer spnState;

    private LocalDateTime spnInsTime;

    private LocalDateTime spnUpdTime;

}
