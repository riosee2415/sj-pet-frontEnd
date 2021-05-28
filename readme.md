# DEV-SAMPLE PROJECT

# Framework

<pre>
    4LEAF GEAR
</pre>

## MAIN SCREEN

| 번호 | 화면명(영어) | 화면설명(한글) | 화면코드 | 연결URL       |
| :--- | :----------- | :------------- | :------- | :------------ |
| 1    | MAIN         | 메인           | MM00     | "/"           |
| 2    | ABOUT        | 회사           | MM01     | "/about"      |
| 3    | INTERIOR     | 인테리어       | MM02     | "/interior"   |
| 4    | INFO         | 매장안내       | MM03     | "/info"       |
| 5    | FRANCHISEE   | 가맹절차       | MM04     | "/franchisee" |
| 6    | CONTACT      | 가맹상담 QNA   | MM05     | "/contact"    |

## ADMIN SCREEN

| 번호 | 화면명(영어) | 화면설명(한글)         | 화면코드 | 연결URL                              |
| :--- | :----------- | :--------------------- | :------- | :----------------------------------- |
| 1    | AD00         | 관리자 메인            | AD00     | "/admin"                             |
| 2    | AD01         | 접속자 통계            | AD01     | "/admin/statManagement"              |
| 3    | AD02         | 메인베너 관리          | AD02     | "/admin/mainBannerManagement"        |
| 4    | AD03         | 하단베너 관리          | AD03     | "/admin/footerInfoManagement"        |
| 5    | AD04         | 팝업 관리              | AD04     | "/admin/popUpManagement"             |
| 6    | AD05         | 공지사항 유형 관리     | AD05     | "/admin/noticeTypeManagement"        |
| 7    | AD06         | 공지사항 관리          | AD06     | "/admin/noticeManagement"            |
| 8    | AD07         | 자주묻는 질문 관리     | AD07     | "/admin/faqManagement"               |
| 9    | AD08         | 이벤트 등록            | AD08     | "/admin/eventBoardManagement"        |
| 10   | AD09         | 이벤트 게시판 관리     | AD09     | "/admin/eventBoardListManagement"    |
| 11   | AD10         | 일반 회원 관리         | AD10     | "/admin/userManagement"              |
| 12   | AD11         | 사업자 회원 관리       | AD11     | "/admin/bUserManagement"             |
| 13   | AD12         | 권한 관리              | AD12     | "/admin/userRightManagement"         |
| 14   | AD13         | (일반)탈퇴회원 관리    | AD13     | "/admin/userExitManagement"          |
| 15   | AD14         | (사업자)탈퇴 회원 관리 | AD14     | "/admin/bUserExitManagement"         |
| 16   | AD15         | (일반)차단 회원 관리   | AD15     | "/admin/userBlackManagement"         |
| 17   | AD16         | (사업자)차단 회원 관리 | AD16     | "/admin/bUserBlackManagement"        |
| 18   | AD17         | 회원 권환 변경         | AD17     | "/admin/userRightControllManagement" |
| 19   | AD18         | 모바일 베너 관리       | AD18     | "/admin/mobileMainBannerManagement"  |
| 20   | AD19         | 1:1문의 관리           | AD19     | "/admin/directRequestManagement"     |
| 21   | AD30         | 가맹점 관리            | AD30     | "/admin/storeManagement"             |
| 22   | AD31         | 가맹점 상세정보        | AD31     | "/admin/storeDetailManagement/:id"   |
| 23   | AD32         | 스토리뷰 등록          | AD32     | "/admin/storyViewManagement/"        |
| 24   | AD33         | 스토리뷰 리스트        | AD33     | "/admin/storyViewDetailManagement/"  |
| 25   | AD34         | 가맹정 추가하기        | AD34     | "/admin/storeCreateManagement/"      |

## CLIENT DEVELOPMENT

- [x] 접속자 통계 [4LEAF.YSH]
- [ ] 메인베너(영상) 데이터베이스 연동
- [x] 팝업 데이터베이스 연동 [4LEAF.YSH]
- [x] 푸터 데이터베이스 연동 [4LEAF.YSH]

## ADMIN DEVELOPMENT

- [x] 접속자통계 [4LEAF.YSH]
- [x] 팝업 관리 [4LEAF.YSH]
- [x] 메인베너 관리 [4LEAF.YSH]
- [x] 모바일 배너 관리 [4LEAF.SJH]
- [x] 하단 정보 관리 [4LEAF.YSH]
- [x] 이벤트 등록 [4LEAF.YSH]
- [x] 이벤트 게시판 관리 [4LEAF.YSH]
- [x] 일반 회원 관리 [4LEAF.YSH]
- [x] 사업자 회원 관리 [4LEAF.YSH]
- [x] 권한 관리 [4LEAF.YSH]
- [x] (일반)탈퇴회원 관리 [4LEAF.SJH]
- [x] (사업자)탈퇴 회원 관리 [4LEAF.SJH]
- [x] (일반)차단 회원 관리 [4LEAF.SJH]
- [x] (사업자)차단 회원 관리 [4LEAF.SJH]
- [x] 회원 권한 변경 [4LEAF.YSH]
- [x] 1:1 문의 관리 [4LEAF.SJH]
- [x] 가맹점 관리 [4LEAF.YSH]
- [x] 가맹점 상세정보 [4LEAF.YSH]

# commonUtils

| FUNCTION         | PARAMETER | DATA TYPE | RETURN  |
| :--------------- | :-------- | :-------- | :------ |
| numberWithCommas | value     | Number    | Integer |
| emptyCheck       | value     | All(\*)   | Boolean |

## REPAIRE LOCATION

- [ ] AD02Container.jsx
- [ ] AD04Container.jsx
- [ ] AD08Container.jsx
- [ ] AD09Container.jsx
- [ ] AD18Container.jsx
- [ ] Editor.jsx
