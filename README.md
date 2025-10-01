    public List<RiderGogoraRes> getRiderGoGoraInsuranceList(String siSellerCode) throws Exception {
        List<RiderGogoraResDto> riderDtos = (List<RiderGogoraResDto>) riderInfoRepository.findRiderGoGoraInsuranceList(siSellerCode);

        List<RiderGogoraRes> resList = new ArrayList<>();

        for (RiderGogoraResDto rider : riderDtos) {
            resList.add(RiderGogoraRes.create(rider));
        }

        return resList;
    }
