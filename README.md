    public User findByPhoneNumber2(String phoneNumber){
        User resultUser = queryFactory
                .selectFrom(user)
                .where(user.phoneNumber.eq(phoneNumber))
                .where(user.useYN.eq("Y").or(user.useYN.eq("H")))
                .fetchOne();
        if(resultUser == null){
            throw new BusinessException(ErrorCode.NOT_MATCH_USER1);
        }
        return resultUser;
    }
