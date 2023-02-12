export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-typescript",
    // this is for bcrypt encryption of passwords
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey:`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCOUXfiIm11RU7/tsMoqxj0wfXx
OkTPGmoDVOtkN5b5PAt//Q87567Bt7082zfNyC5V8ibAdFo3aPzMNgkoOZhey6jt
OlFUpZIrIi1QCEt7k3hVyThRez74UJ+lCSE/mxh3Wd0b4YKvGEaZyWdQRbiOFNqE
S3xWYh3U7+nNpM++uwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey:`-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCOUXfiIm11RU7/tsMoqxj0wfXxOkTPGmoDVOtkN5b5PAt//Q87
567Bt7082zfNyC5V8ibAdFo3aPzMNgkoOZhey6jtOlFUpZIrIi1QCEt7k3hVyThR
ez74UJ+lCSE/mxh3Wd0b4YKvGEaZyWdQRbiOFNqES3xWYh3U7+nNpM++uwIDAQAB
AoGBAIZ97Mnx+PjC18YGA+Xx0vKyPWaKxy3ka1zcqlqZwf2kRcXc8sGMz3RX2+if
zduVGly0KvTiv8LvXz7orbyquRcrYAf7UO8ehQDpnQ9isIbdH7gyK4Ir9A9tJjh9
7F7sM/lcSa/nBecPJQmrtFSMGkm1/djExDNjXb/AXVeKyvPZAkEAxjn5vTd4oxdl
nkauf6T5Wd8okDGmJUOwGIrhG+rXocH3/Wqg7+KVjMJYewn8FATOmICxrfpRWoiL
F30v6K/vpQJBALfMFN6PneskLmRXfOhredTQHigXoskvdBygvEEV/vsQ7JvBczDL
WSas5XxSIEV/hrC4UdNGzXCirjXesm01pt8CQGi6frCymwEHvn+F9nGn9rm9xk+Q
e6haf7InxdEbHTvwIBZ6fHbg7oREtbyjxNPKymAWNkml48+CLoKFeIdmVKUCQGkl
QzsfhgQjKrcUpcyAz63Dcb0V6HaXwyEtgwTpBHm08OcaAEAF1PafKpm4keWwUul+
SLFJa/Xn2ynOQNzhOJkCQEdLnZmiwyQ8egO+ujpN0HwgcxnNui/TgHToA5ZVaBtG
hm+gUMQyXQuI9AMa3w9Tai3dKFUplsMOqUEFaGfx6OY=
-----END RSA PRIVATE KEY-----`,

}