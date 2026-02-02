# 회원가입 페이지 템플릿 시안 46

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 네오 브루탈리즘

UI 구조: 카드 분리형 레이아웃

인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

**네오 브루탈리즘 + 카드 분리형 레이아웃 + 입력 반응형 애니메이션** — **네오 브루탈리즘** 무드(굵은 보더 3px·0 radius·Archivo Black·primary #eab308·배경 #fafaf9)와 **카드 분리형** 구조(헤더 카드 + 이메일·이름·비밀번호·비밀번호 확인·제출 각각 독립 카드)를 결합한 시안. **입력 반응형 애니메이션**으로 포커스 시 카드 scale(1.01)·primary shadow, 유효 시 녹색 보더·shadow, 무효 시 에러 보더·shadow, 입력 포커스 시 하단 보더·primary 강조를 적용한다.

- 시안 34(미래적 클린+카드 분리형+GSAP), 시안 35(네오 브루탈리즘+풀스크린+상태 변화)와 달리 **네오 브루탈리즘 + 카드 분리형** 조합에 **입력 반응형 애니메이션**(카드 scale·shadow·border 색 전환)을 전면 적용한다.
- **입력 반응형 애니메이션**: .nbc-card--focused 시 transform scale(1.01), border-color primary-dark, box-shadow 4px 4px 0 primary. .nbc-card--valid 시 border-color valid, box-shadow 2px 2px 0 valid. .nbc-card--invalid 시 border-color error, box-shadow 2px 2px 0 error. input focus 시 border-bottom·box-shadow transition.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .nbc-wrap(max-width 400px) 내 헤더 카드 + 폼 카드(필드별) + 제출 카드.
- **네오 브루탈리즘 톤**: 배경 #fafaf9, 카드 #fff·3px #18181b 보더·0 radius·Archivo Black·Archivo·primary #eab308, valid #16a34a, error #dc2626.
- **카드 분리형**: 헤더·이메일·이름·비밀번호·비밀번호 확인·제출 각각 .nbc-card. --focused·--valid·--invalid 모디파이어.
- **입력 반응형 애니메이션**: 카드 focus scale(1.01)·shadow, valid/invalid border·shadow, input focus 하단 보더·primary.
- **반응형**: 480px 이하에서 패딩 축소, 중앙 정렬 유지.
- **접근성**: 라벨·placeholder, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .nbc-card(y 14, stagger) 등장.

## 사용 의도

- **네오 브루탈리즘** 톤과 **카드 분리형** 레이아웃, **입력 반응형 애니메이션**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
46/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
