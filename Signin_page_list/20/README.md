# 회원가입 페이지 템플릿 시안 20

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 네오 브루탈리즘

UI 구조: 마이크로 인터랙션 중심

인터랙션: 상태 변화 강조

---

## 콘셉트

**네오 브루탈리즘 + 마이크로 인터랙션 중심** — **두꺼운 블랙 테두리·무그림자·고대비**의 네오 브루탈리즘 톤과, **포커스·유효·무효** 등 **마이크로 인터랙션**으로 상태를 강조한 시안.

- 시안 1~19(단일·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘·단계형·풀스크린·비대칭·카드 분리형·단일 포커스)와 달리 **3px 블랙 테두리·0 border-radius·대문자 라벨·버튼 호버 시 오프셋 그림자** 등 **네오 브루탈리즘**을 적용한다.
- **마이크로 인터랙션 중심**: 필드 포커스 시 테두리·배경 틴트, 유효 시 녹색 테두리·체크마크(✓), 무효 시 빨간 테두리·배경. **상태 변화 강조**: --focused / --valid / --invalid 클래스로 즉시 시각 피드백.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .brutal-wrap(max-width 420px). 네오 브루탈리즘: 배경 #f5f5f0, 카드 화이트·3px #1a1a1a 테두리, border-radius 0.
- **마이크로 인터랙션**: .brutal-field--focused(포커스 시 필드 테두리·배경), .brutal-field--valid(녹색 테두리·배경·체크마크), .brutal-field--invalid(빨간 테두리·배경·에러 문구). 버튼 hover 시 배경 채움·translate(-2px,-2px)·box-shadow 오프셋.
- **상태 변화 강조**: focused / valid / invalid 각각 border-color·background·체크마크/에러 문구로 명확히 구분. transition 0.15s.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기, 체크마크 aria-hidden.
- **애니메이션**: GSAP .brutal-card 등장(opacity + y 12), 0.4초.

## 사용 의도

- **네오 브루탈리즘** 무드와 **마이크로 인터랙션·상태 변화 강조**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·validEmail 등 getter·검증·제출.

## 구조

```
20/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, --focused/--valid/--invalid)
├── style.scss      # 시안 전용 SCSS (네오 브루탈리즘·마이크로 인터랙션·상태 강조)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, validEmail 등 getter, 검증), GSAP 카드 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-brutal.signup-micro > .brutal-wrap > .brutal-card > 헤더 + form(.brutal-field × 4, --focused/--valid/--invalid) + 가입하기 + 푸터.
- **style.scss / style.css**: 3px border, 0 radius, 대문자 라벨·버튼, --focused/--valid/--invalid, 체크마크·에러 스타일.
- **js/main.ts**: focusedField, get validEmail/validName/validPassword/validPasswordConfirm, validate*, handleSubmit, GSAP .brutal-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
