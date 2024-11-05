const crypto = require("crypto");

/**
 * First of all, the SENDER obtains the RECIPIENT PUBLIC KEY.
 */
const alicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmmUHUoJVGeXVYra9n1gW
44uBvE5KTr8uA6uybtlCzHYfVWgnsKaawvlwACmtQXhPUCmFQB0j8WiWRhtlT1PQ
vir9B43S1DjcyKEQIksVSHlUfv+kXowoQHVrOGS+Up8ixEA7OjZxohZopJ4hsXfK
e0WQNZ8ovog2VvNx4Lw+jXxLku46qiZhxhtbgJqnxzVvD0yvj0iYGOa6XMZduNTk
jY0iSbrDS26Eocy/mbJVEwAHruFY+PQUF4IKP7vKFpfKRdQZ0183KwxQISy+EJPs
qZmOyu2bk09B0GS+S/Fh2U1x8pNaj2IcrcU6AzoaX3meTvjjATKCHP3iTQWF8bBM
uQIDAQAB
-----END PUBLIC KEY-----`;
const alicePublicKey = crypto.createPublicKey(alicePublicKeyPem);

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCaZQdSglUZ5dVi
tr2fWBbji4G8TkpOvy4Dq7Ju2ULMdh9VaCewpprC+XAAKa1BeE9QKYVAHSPxaJZG
G2VPU9C+Kv0HjdLUONzIoRAiSxVIeVR+/6RejChAdWs4ZL5SnyLEQDs6NnGiFmik
niGxd8p7RZA1nyi+iDZW83HgvD6NfEuS7jqqJmHGG1uAmqfHNW8PTK+PSJgY5rpc
xl241OSNjSJJusNLboShzL+ZslUTAAeu4Vj49BQXggo/u8oWl8pF1BnTXzcrDFAh
LL4Qk+ypmY7K7ZuTT0HQZL5L8WHZTXHyk1qPYhytxToDOhpfeZ5O+OMBMoIc/eJN
BYXxsEy5AgMBAAECggEAIt6O1wxe7nSpKvx1GoQBVV44TIBNCXhlisgwChdw3e8O
mBIoJp4WBVNi/3JqMgdbOFJMSSTbrYWurMI6sP4PvqdEUryt4Sa/fGNd2rTk52OZ
mP4hEAZs/9PVBZ1BG7Vbm4GbLsRFiTMw6n7ZQrS4ivs0vNuHjvKB/UTJkxVItljC
RmS8luPfNZ0zSR37RVxLYa8XJKGQfqBSI3wwUiy+3MH9NvjKNFMW3rnxeD7VDnf2
aLm7WVKPNCDQ61xoYTI7p3kPlS8NZIxoJQ+Fc5rCBI8QMP+xFIvUBI53t8VTYaHS
VZSEkBqmG+Iw0JVF+M9bTwXuVgNdsZDJzh625hJs9QKBgQDWOFSHWzzyupSJLzTj
OyWYJZCCpkeeEBSFSbZhKDIUeaNOdW4Tp4tZmst2FS7Knb7ngpsaDutyQFPXbkU/
3WsrCUEdbGCWJpU84RF2NoGJ4QBhXihHodEOafhGJ8sfQixSvd4i6o0EpP8nv0B2
2xdrZgbwoV/8nxLORwgGfGIutQKBgQC4gbXc143Pyh6jMtgZeO+VOUvgZfDnAXgh
XoS9vGOUHg0jK5iMAj+Vw15aSXk9gyWeZ0JovA3oLw026yi0Wqyk4VFO8UXD8u9Y
26qxdl3I8u2yp1UL2aTCv/6pdMcOj5W7I2FIUteW5g9jqMlnbhD3h/V5JhS+XtMz
AHfbYXGkdQKBgBAKGbIkz7Rw6ew3n6Mf65mvvlk58ATSuWaddU1jABTuYp7eRgas
tc9YusE1ptI+62tUKR7TXSepz11DAWZdwsdvIvP8CGNVsjjjtTX/sMVNFoUz0ppC
cG++2XsPQbMudjkfxEEjBLoDTKOCO2Zq0x8UfZKI0rIMixDs2pn5uDQ9AoGBAIDI
iNgM3L8cpSXkZ1HgR9owk/WdMfkL3X3tK1oEFL1d/G2AEIopR5iRNVpvzmBRGgDm
skPIfyyBKwgaO98nKzoqy0X+wmNzPf0X1pznsa6BYchBY+tRjt8gg/Bjwk03i5uD
pnOE31ZEXpmBRpMbEFy2WXCmU/RM273NpdtKuLfBAoGAOnZCsfi1s5XotcXYGE5V
DrXGbP2uLLVQyyrWVD6hPDwzuTO8aLfpJsjzNBLWzPV6p86rJiyMwW6Q9FYg90xq
Sn+ex8EN6wX2pqjNRsPwaeNBtvVupT1l2WAO/D7KSywsprzi4UJxqRijZrajewU0
Lfv0hPZhkjfL6FB/hSYjeE4=
-----END PRIVATE KEY-----`;
const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw5PTp806XXhrI08Fpqpp
qaT/zJbJ+EOx83FWq9J97pTFDwsyk9GyBDW87OJOmEqBeAowOoVBwbBG0k1XWBLP
LLqFxnqNwXnOKPCjPw2qnGPt5IvidiCPr1nv0lYPXiuccCEOgNQw5XGqfjbx01Wh
gNgdpR7ktBDjQC0qNwgeBQLQx0sqkA/kXKKzuF9ErtyFE//GJwLATb12erFsjwA+
uXjEMqYlqqI9aS4hy1pjDIVg//BMB4ifYS80wAATz1PPDvw8jEbCB23OfeTn2fDp
C/uB24xQSK3Er4r1otfeuoXCFBUhdGB/DfFB1WNvjs59MfjPoYEup/wphmHm53Qj
uwIDAQAB
-----END PUBLIC KEY-----`;
const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);

const message = "I want some apples";

const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Message:", ciphertext.toString("hex"));
