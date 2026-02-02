# 회원가입 페이지 템플릿 시안 42

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 카드 분리형 레이아웃

인터랙션: 스크롤 없는 고정 플로우

---

## 콘셉트

**다크 아카이브 + 카드 분리형 레이아웃 + 스크롤 없는 고정 플로우** — **다크 아카이브** 무드(다크 배경 #0c0a09·카드 #1c1917·브라운 primary #a78b71·IBM Plex Mono·IBM Plex Sans KR·그리드 텍스처)와 **카드 분리형** 구조(이메일·이름·비밀번호·비밀번호 확인을 각각 독립 카드로 분리, PC에서 2×2 그리드)를 결합한 시안. **스크롤 없는 고정 플로우**로 뷰포트 100vh/dvh 고정·overflow hidden·한 화면에 모든 카드와 제출 버튼이 들어가도록 설계한다.

- 시안 34(미래적 클린+카드 분리형), 시안 39(다크 아카이브+단일 포커스+GSAP)와 달리 **다크 아카이브 + 카드 분리형** 조합으로, **필드별 카드**를 **2×2 그리드**에 배치하고 **스크롤 없이** 한 화면에서 전체 입력·제출이 가능하도록 구성한다.
- **스크롤 없는 고정 플로우**: .signup-dac.signup-fixed에 height: 100dvh, overflow: hidden. .dac-inner에 max-height: 100%, flex-shrink·clamp로 간격·폰트를 반응형 조절하여 모든 콘텐츠가 한 뷰포트에 수용된다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .dac-inner(max-width 520px) 내 헤더 + .dac-form 2×2 그리드(4개 카드) + .dac-actions. 480px 이하에서 카드 1열 배치.
- **다크 아카이브 톤**: 배경 #0c0a09, 그리드 텍스처(브라운 3% 라인), 카드 #1c1917·브라운 보더·IBM Plex Mono 라벨·IBM Plex Sans KR 본문·primary #a78b71(세피아 브라운), 에러 #b85450.
- **카드 분리형**: 이메일·이름·비밀번호·비밀번호 확인 각각 .dac-card. 포커스 시 --focused(primary 링), 무효 시 --invalid(에러 링).
- **스크롤 없는 고정 플로우**: 100vh/dvh 고정, overflow hidden, clamp·gap·max-height로 한 화면 내 수용.
- **반응형**: 640px·480px 브레이크포인트에서 패딩·그리드 열(2→1) 조정, 중앙 정렬 유지.
- **접근성**: 라벨·placeholder, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .dac-header(y -8), .dac-card(y 10, stagger), .dac-actions(y 6) 등장.

## 사용 의도

- **다크 아카이브** 톤과 **카드 분리형** 레이아웃, **스크롤 없는 고정 플로우**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
42/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
