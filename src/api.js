import axios from "axios";
const cookie =
  "MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/eapi/feedback;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/eapi/feedback;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/api/clientlog;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/neapi/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/weapi/feedback;;MUSIC_SNS=; Max-Age=0; Expires=Fri, 14 Oct 2022 05:35:04 GMT; Path=/;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/neapi/feedback;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/weapi/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/openapi/clientlog;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/wapi/feedback;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/wapi/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/api/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/neapi/clientlog;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/weapi/feedback;;MUSIC_U=c56a89cc3ac75d57cedc7279e7894b60b571ba4d2f33fb30d5bda994a9dedcd4993166e004087dd3728758c623d93a778884c97d6e815aede7264975b63430957397c05fa15c5a927a561ba977ae766d; Max-Age=1296000; Expires=Sat, 29 Oct 2022 05:35:04 GMT; Path=/;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/eapi/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/api/feedback;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/weapi/clientlog;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/openapi/clientlog;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/neapi/feedback;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/eapi/clientlog;;MUSIC_R_T=1518438767464; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/api/feedback;;__remember_me=true; Max-Age=1296000; Expires=Sat, 29 Oct 2022 05:35:04 GMT; Path=/;;MUSIC_A_T=1515035419922; Max-Age=2147483647; Expires=Wed, 01 Nov 2090 08:49:11 GMT; Path=/wapi/feedback;;__csrf=73a78f979566315ad74a3962f00e746f; Max-Age=1296010; Expires=Sat, 29 Oct 2022 05:35:14 GMT; Path=/;";

export async function getLink(id) {
  return axios({
    baseURL: "https://server.xhhzs.cn",
    url: "/song/url",
    method: "post",
    params: {
      id,
      cookie,
    },
  });
}

export async function search(word) {
  return axios({
    baseURL: "https://server.xhhzs.cn",
    url: "/search",
    method: "get",
    params: {
      keywords: word,
      cookie,
    },
  });
}
