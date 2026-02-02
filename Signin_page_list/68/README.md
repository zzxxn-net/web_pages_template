# 회원가입 페이지 템플릿 시안 68

사이버 미니멀 톤의 단일 포커스 입력 흐름 회원가입 페이지 MVP 시안입니다.  
한 번에 하나의 필드만 강조하고, 입력 시 반응형 애니메이션을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 사이버 미니멀  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** 입력 반응형 애니메이션  

## 콘셉트 및 UI/UX 특징

- **사이버 미니멀:** 다크 배경(#0c0e12)·Space Grotesk·IBM Plex Mono, 블루 액센트(#3b82f6)로 테크한 미니멀 톤을 줍니다.
- **단일 포커스 입력 흐름:** 포커스된 필드만 s68-field--active(테두리·라벨 색·scale 1.01)로 강조하고, 나머지 필드는 s68-field--dim으로 opacity 0.4를 적용해 한 번에 하나의 항목에만 시선이 가도록 했습니다.
- **입력 반응형 애니메이션:** 포커스 시 해당 필드 scale 1.01(CSS)·입력창 scale 1.02(GSAP), 블러 시 1로 복귀. GSAP으로 .s68-wrap 등장(opacity·y) 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP  
- **파일:** `index.html`(마크업), `style.scss` → `style.css`(시안 전용 스타일), `js/main.ts` → `js/main.js`(검증·제출·GSAP 등장·입력 scale)  
- **동작:** Alpine.js로 focusedField·errors·검증·제출, GSAP으로 wrap 등장·입력 포커스 scale.

## 중앙 정렬 및 반응형

- .s68-wrap은 뷰포트 가로·세로 중앙에 배치하고, 폼은 중앙 정렬을 유지합니다.  
- max-width 400px·패딩으로 PC~모바일 전 범위 반응형을 적용했습니다.
