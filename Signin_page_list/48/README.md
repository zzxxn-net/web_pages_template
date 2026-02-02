# 회원가입 페이지 템플릿 시안 48

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 마이크로 인터랙션 중심

인터랙션: 스크롤 없는 고정 플로우

---

## 콘셉트

**다크 아카이브 + 마이크로 인터랙션 중심 + 스크롤 없는 고정 플로우** — **다크 아카이브** 무드(다크 배경 #0c0a09·그리드 텍스처·IBM Plex Mono·IBM Plex Sans KR·primary #a78b71)와 **마이크로 인터랙션 중심** 구조(라벨 포커스 시 underline 확장·라벨 색 전환·입력 포커스 시 scale(1.008)·버튼 호버 translateY(-0.5px))를 결합한 시안. **스크롤 없는 고정 플로우**로 뷰포트 100vh/dvh 고정·overflow hidden·clamp·gap으로 한 화면에 헤더·폼·제출 버튼이 모두 수용되도록 설계한다.

- 시안 42(다크 아카이브+카드 분리형+스크롤 없음), 시안 36(현대 판타지+마이크로+스크롤 없음)과 달리 **다크 아카이브 + 마이크로 인터랙션 중심** 조합에 **스크롤 없는 고정 플로우**를 적용: 단일 .dam-inner 카드 내 컴팩트 폼, 마이크로 애니메이션(underline·scale·색 전환)으로 포커스/호버 반응.
- **마이크로 인터랙션**: .dam-field--focused 시 .dam-label-underline width 0→100%, .dam-label-text color→primary, .dam-input/.dam-pw-wrap scale(1.008)·primary 링. .dam-btn 호버 translateY(-0.5px).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .dam-inner(max-width 360px, max-height 100%) 단일 카드 내 헤더 + 폼 + 제출. 100dvh·overflow hidden으로 스크롤 없음.
- **다크 아카이브 톤**: 배경 #0c0a09, 그리드 라인·카드 rgba(28,25,23,0.9)·IBM Plex Mono/Sans KR·primary #a78b71, 에러 #b85450.
- **마이크로 인터랙션 중심**: 라벨 포커스 underline 확장·라벨 색, 입력 포커스 scale(1.008)·primary 링, 버튼 호버 translateY(-0.5px).
- **스크롤 없는 고정 플로우**: height 100dvh, overflow hidden, clamp·gap·max-height로 한 화면 수용.
- **반응형**: clamp로 폰트·패딩·gap 조정, 480px 이하에서도 중앙 정렬 유지.
- **접근성**: 라벨·placeholder, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .dam-inner(y 10) 등장.

## 사용 의도

- **다크 아카이브** 톤과 **마이크로 인터랙션 중심** UX, **스크롤 없는 고정 플로우**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
48/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
