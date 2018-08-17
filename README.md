# FINEDUST
Node.js 프레임워크 express를 사용하여 구현한 미세먼지 농도 측정 사이트.  

작년과 올해 심해지기 시작한 미세먼지의 농도를 조회하는 사이트를 오픈 API를 활용하여 구현.
## Site
![IMG1](https://github.com/lowelllll/FINEDUST/blob/master/IMG/finedust_1.PNG)
![IMG2](https://github.com/lowelllll/FINEDUST/blob/master/IMG/finedust_2.PNG)
## 로컬 환경 셋팅
1. clone repository
2. `npm install`로 모듈 설치
3. 공공데이터포털 [한국환경공단_대기오염정보 조회 서비스](https://www.data.go.kr/dataset/15000581/openapi.do)에서 인증키 발급.
4. 인증키를 발급받아 `secret.json` 파일 생성,저장
```json
// secret.json
{
    "ServiceKey":"발급받은 서비스 키"
}
```
## 서버 띄우기
```
node app.js
```

`localhost:8000`에서 확인.


## refer
- DESIGN  
    - [Weather!?](https://weather.ooops.kr/location) 날씨 정보 웹 사이트에서 디자인을 참조하였습니다.
- API
    - [한국환경공단_대기오염정보 조회 서비스](https://www.data.go.kr/dataset/15000581/openapi.do) 
    - [korea-administrative-district](https://github.com/cosmosfarm/korea-administrative-district)


