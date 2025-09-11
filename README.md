YTQ3wWB0YBS/A1oZyhNvO0Lvu0lU6Bi3ck8E9AGkLrk78wCu1VhCjb7U963mhglz4ZM8ZqhUuAKjtl2PC6xSacEHUtABR72W7s6wJ/76eC2xL/zon0cCdgcO61prXDxOLS3+OpWUbbfo9mdSlFXEQTyxKuM2zy5MVurLYuSVcxXMG1f0aZIywWKaj0fUa2Zp

    public static String AES256_DECRYPT(String text) throws NoSuchPaddingException, NoSuchAlgorithmException, IllegalBlockSizeException, BadPaddingException, InvalidAlgorithmParameterException, InvalidKeyException, UnsupportedEncodingException {
            Cipher cipher = Cipher.getInstance(ALG);
            SecretKeySpec keySpec = new SecretKeySpec(PK.getBytes(), "AES");
            IvParameterSpec ivParamSpec = new IvParameterSpec(IV.getBytes());
            cipher.init(Cipher.DECRYPT_MODE, keySpec, ivParamSpec);

            byte[] decodedBytes = Base64.getDecoder().decode(text);
            byte[] decrypted = cipher.doFinal(decodedBytes);
            return new String(decrypted, "UTF-8");
    }
