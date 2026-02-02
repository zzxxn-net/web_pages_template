# 회원가입 페이지 템플릿 시안 45

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 사이버 미니멀

UI 구조: 비대칭 레이아웃

인터랙션: 상태 변화 강조

---

## 콘셉트

**사이버 미니멀 + 비대칭 레이아웃 + 상태 변화 강조** — **사이버 미니멀** 무드(다크 배경 #0a0a0f·그리드 텍스처·IBM Plex Mono·Inter·primary #06b6d4)와 **비대칭** 구조(좌측 넓은 비주얼 영역 1.2fr + 우측 좁은 폼 영역 1fr)를 결합한 시안. **상태 변화 강조**로 유효 시 ✓·녹색(.cma-state--ok), 무효 시 !·에러 링(.cma-state--err), 포커스 시 primary 링(.cma-field--focused)을 적용한다.

- 시안 38(감성 테크+비대칭+포커스 이동), 시안 32(다크 아카이브+비대칭+입력 반응형)와 달리 **사이버 미니멀 + 비대칭** 조합에 **상태 변화 강조**(--valid ✓ 녹색, --invalid ! 에러 링, --focused primary 링)를 전면 적용한다.
- **상태 변화 강조**: .cma-field--valid 시 .cma-state--ok opacity 1, color #22c55e. .cma-field--invalid 시 .cma-state--err opacity 1, input/pw-wrap border·box-shadow 에러 링. .cma-field--focused 시 primary 링.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. grid 1.2fr(비주얼) 1fr(폼). 768px 이하에서 1열(비주얼 상단·폼 하단).
- **사이버 미니멀 톤**: 배경 #0a0a0f, 비주얼 #0d0d12·그리드 라인 rgba(6,182,212,0.06)·IBM Plex Mono "Sign up"·Inter 본문·primary #06b6d4, valid #22c55e, error #ef4444.
- **비대칭 레이아웃**: 좌측 .cma-visual(그리드+텍스트), 우측 .cma-form-wrap(.cma-form-inner max-width 340px).
- **상태 변화 강조**: 필드 --focused(primary 링), --valid(✓ 녹색), --invalid(!·에러 링).
- **반응형**: 768px 이하에서 비주얼 상단·폼 하단, 중앙 정렬 유지.
- **접근성**: 라벨·placeholder, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .cma-form-inner(x 12 → 0) 등장.

## 사용 의도

- **사이버 미니멀** 톤과 **비대칭** 레이아웃, **상태 변화 강조**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
45/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
