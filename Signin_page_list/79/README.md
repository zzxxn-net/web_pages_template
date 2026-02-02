# 시안 79 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

딥 퍼플·앰버 골드 톤의 **현대 판타지** 무드에, **마이크로 인터랙션**(포커스 시 필드 scale·라벨 색·글로우, 호버 시 버튼 scale)과 **입력 반응형 애니메이션**(GSAP 등장·필드 stagger)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **현대 판타지:** 배경 그라데이션(#1a1625→#2d2438→#1f1b2e), 앰버·퍼플 글로우, Cormorant Garamond·Outfit, 글래스 카드(backdrop-filter), 액센트 #d4af37.
- **마이크로 인터랙션 중심:** 포커스 시 `.s79-field--focused`로 필드 scale(1.01)·라벨 액센트 색·입력창 테두리·글로우. 비밀번호 보기 버튼 호버 시 scale(1.03). 제출 버튼 호버 시 translateY(-2px)·shadow 강화.
- **입력 반응형 애니메이션:** GSAP으로 로드 시 `.s79-wrap` 페이드인 + 위로 이동, `.s79-field` stagger 순차 등장. CSS transition으로 포커스 시 scale·색 전환.
- **중앙 정렬:** `.signup-fixed` + `.s79`로 뷰포트 기준 가로·세로 중앙, PC·모바일 반응형.
- **GSAP:** wrap 등장 + 필드 stagger 등장.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 대응.
