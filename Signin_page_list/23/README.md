# 회원가입 페이지 템플릿 시안 23

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 사이버 미니멀

UI 구조: 풀스크린 몰입형

인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

**풀스크린 몰입형 + 사이버 미니멀** — 카드/박스 없이 **뷰포트 전체**를 쓰는 **풀스크린 몰입**과, **모노스페이스·얇은 테두리·다크 톤**의 **사이버 미니멀** 무드로 일관된 UI를 구성한 시안. **입력 반응형 애니메이션**으로 포커스 시 필드 border·ring·translateX 전환을 적용한다.

- 시안 15(사이버 미니멀+단계 분할형), 시안 21(실험적+풀스크린+GSAP)과 달리 **사이버 미니멀 + 풀스크린 몰입형** 조합으로, 카드 없이 .cyber-inner만 중앙에 두고, **입력 반응형 애니메이션**(--focused 시 translateX(2px)·ring)을 적용한다.
- **입력 반응형 애니메이션**: 포커스 시 해당 필드 border-color primary, box-shadow ring, transform translateX(2px). blur 시 검증 후 invalid 시 border·ring 에러 색.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0c0e10, .cyber-inner(max-width 400px). 카드 박스 없이 풀스크린 몰입.
- **사이버 미니멀 톤**: 모노스페이스(JetBrains Mono) 제목·라벨·버튼·링크, 산세리프 입력. 텍스트 #e6edf3, 보조 #8b949e, 보더 #1e2329, primary #00d4aa.
- **입력 반응형 애니메이션**: .cyber-field--focused 시 .cyber-input·.cyber-pw-wrap에 border-color primary, box-shadow 0 0 0 2px primary-soft, transform translateX(2px). .cyber-field--invalid 시 border·box-shadow 에러 색. transition 0.2~0.25s.
- **반응형**: 480px 이하에서 제목 크기 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .cyber-inner 등장(opacity + y 14), 0.45초.

## 사용 의도

- **풀스크린 몰입** 레이아웃과 **사이버 미니멀** 무드, **입력 반응형 애니메이션**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
23/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 풀스크린·카드 없음)
├── style.scss      # 시안 전용 SCSS (사이버 미니멀·풀스크린·입력 반응)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-cyber.signup-full > .cyber-inner > 헤더 + form(.cyber-field × 4, --focused/--invalid) + 가입하기 + 푸터.
- **style.scss / style.css**: $bg #0c0e10, $primary #00d4aa, .cyber-field--focused/--invalid, 입력 focus translateX·ring.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .cyber-inner.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
