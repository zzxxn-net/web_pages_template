# 회원가입 페이지 템플릿 시안 65

감성 테크 톤의 풀스크린 몰입형 회원가입 페이지 MVP 시안입니다.  
필드별 focus·ok·invalid 상태를 시각적으로 강조합니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 감성 테크  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 상태 변화 강조  

## 콘셉트 및 UI/UX 특징

- **감성 테크:** 라벤더 그라데이션 배경(#f8f4ff→#f0e8ff)·Nunito·Quicksand, 보라 액센트(#8b7ab8)·녹색 확인(#7ab89a)으로 따뜻하고 감성적인 톤을 줍니다.
- **풀스크린 몰입형:** 뷰포트 전체(min-height 100dvh)를 그라데이션 배경으로 채우고, 헤더·폼만 중앙(.s65-full)에 배치해 몰입형 레이아웃으로 구성했습니다.
- **상태 변화 강조:** 필드별 focus(보라 테두리·라벨)·ok(녹색 테두리·"확인·일치" 문구)·invalid(빨간 테두리·에러 문구)를 fieldState·isOk로 구분하고, 제출 버튼은 그라데이션·그림자·호버 시 살짝 떠오르는 연출로 상태를 강조합니다. GSAP으로 .s65-full 등장 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP  
- **파일:** `index.html`(마크업), `style.scss` → `style.css`(시안 전용 스타일), `js/main.ts` → `js/main.js`(검증·제출·fieldState·isOk·GSAP 등장)  
- **동작:** Alpine.js로 focusedField·errors·fieldState·isOk·검증·제출, GSAP으로 .s65-full 등장.

## 중앙 정렬 및 반응형

- 모든 해상도에서 .s65-full을 가로·세로 중앙에 배치하고, 폼은 중앙 정렬을 유지합니다.  
- max-width 400px·패딩으로 PC~모바일 전 범위 반응형을 적용했습니다.
