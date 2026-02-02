# 회원가입 페이지 템플릿 시안 15

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 사이버 미니멀

UI 구조: 단계 분할형(Progressive Form)

인터랙션: GSAP 기반 부드러운 전환, 포커스 이동 중심 UX

---

## 콘셉트

**단계 분할형(Progressive Form) + 사이버 미니멀** — 회원가입을 **2단계**로 나누고, **모노스페이스·얇은 테두리·다크 톤**의 테크 감성으로 일관된 UI를 구성한 시안.

- **Step 1**: 기본 정보(이메일, 이름) → 다음
- **Step 2**: 비밀번호 설정(비밀번호, 비밀번호 확인) → 이전 / 가입하기
- 시안 1~14(단일 카드·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘)과 달리 **한 번에 한 단계만 노출**하며, GSAP으로 패널 전환 애니메이션과 **포커스 자동 이동**을 적용한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 다크 배경(#0f1419), 카드(#1a1f26), 얇은 보더(#2d3640). 카드 최대 너비 420px.
- **단계 표시**: 상단에 1 — 2 스텝 인디케이터(원형 + 연결선). 활성/완료 시 primary(#00d4aa) 강조.
- **사이버 미니멀 톤**: 라벨·설명·버튼에 모노스페이스(JetBrains Mono 계열), 입력은 산세리프. 포커스 링·에러 시 테두리만으로 상태 강조.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기, `role="tabpanel"`·`aria-labelledby`·단계 버튼 `aria-current`.
- **인터랙션**: GSAP으로 카드 등장(opacity + y 12), 단계 전환 시 현재 패널 슬라이드 아웃 → 다음 패널 슬라이드 인. Enter로 다음 필드/다음 단계/제출로 포커스 이동.

## 사용 의도

- **단계별 입력**으로 인지 부하를 줄이고, **사이버/테크 무드**의 서비스(개발자 도구·대시보드 등)에 맞는 회원가입 폼이 필요할 때 활용.
- HTMX `hx-post` 연동 가능, Alpine.js로 단계·검증·포커스·GSAP 트리거.

## 구조

```
15/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 2단계 패널)
├── style.scss      # 시안 전용 SCSS (사이버 미니멀 변수·mixins)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext, goPrev, 검증, 포커스), GSAP 전환
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-progressive` > `.prog-card` > 헤더(제목, 설명, `.prog-steps` 1—2) + form > `.prog-panels` > `.prog-panel[data-step="1"]`(이메일, 이름, 다음) + `.prog-panel[data-step="2"]`(비밀번호, 확인, 이전, 가입하기) + 푸터.
- **style.scss / style.css**: $font-mono, $bg/$card-bg/$border, $primary(#00d4aa), 단계 인디케이터·패널·입력·버튼 스타일.
- **js/main.ts**: `step`, `goNext()`(검증 후 GSAP 패널 전환 + 포커스), `goPrev()`(GSAP 역전환 + 포커스), `focusStep2First()` 등, Alpine `signupForm`, GSAP `.prog-card` 등장·패널 x/opacity 전환.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
