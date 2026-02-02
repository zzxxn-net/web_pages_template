# 회원가입 페이지 템플릿 시안 64

다크 아카이브 톤의 마이크로 인터랙션 중심 회원가입 페이지 MVP 시안입니다.  
모든 전환을 GSAP으로 부드럽게 적용했습니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** GSAP 기반 부드러운 전환  

## 콘셉트 및 UI/UX 특징

- **다크 아카이브:** 다크 배경(#1a1918)·Libre Baskerville·Source Sans 3, 골드/앰버 포인트(#b8956b)로 아카이브 감성을 줍니다.
- **마이크로 인터랙션 중심:** 포커스 시 입력창 scale 1.01(GSAP), 블러 시 1로 복귀. 제출 버튼 호버 시 scale 1.02(GSAP). 등장 시 wrap·헤더·필드·액션을 순차·stagger로 부드럽게 표시합니다.
- **GSAP 기반 부드러운 전환:** `.s64-wrap` 등장(opacity·y), `.s64-header`·`.s64-field`(stagger)·`.s64-actions` 순차 등장, 입력 포커스/블러 scale, 제출 버튼 호버 scale을 모두 GSAP으로 처리해 과하지 않게 자연스럽게 적용했습니다.

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP  
- **파일:** `index.html`(마크업), `style.scss` → `style.css`(시안 전용 스타일), `js/main.ts` → `js/main.js`(검증·제출·GSAP 등장·입력·버튼 마이크로 인터랙션)  
- **동작:** Alpine.js로 검증·제출, GSAP으로 등장·입력 scale·버튼 호버 scale.

## 중앙 정렬 및 반응형

- `.s64-wrap`은 뷰포트 가로·세로 중앙에 배치하고, 폼은 중앙 정렬을 유지합니다.  
- `max-width: 400px`·패딩으로 PC~모바일 전 범위 반응형을 적용했습니다.
