# 로그인 페이지 템플릿 시안 73

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 사이버 미니멀
- **UI 구조:** 비대칭 레이아웃
- **인터랙션:** 상태 변화 강조

## 콘셉트 및 UI/UX 특징

- **사이버 미니멀:** 다크 배경(#0a0c10), 시안 계열 악센트(#00d4ff), 그리드 배경 데코, IBM Plex Sans 타이포로 미니멀한 사이버 톤을 적용했습니다.
- **비대칭 레이아웃:** 데스크톱에서 왼쪽 38%는 브랜드/타이틀 영역(aside), 오른쪽은 로그인 폼 카드로 분리하여 비대칭 구조를 이룹니다. 모바일에서는 세로 배치로 전환됩니다.
- **상태 변화 강조:** 포커스(has-focus)·값 입력(has-value)·에러(has-error) 시 테두리·라벨 색·그림자로 상태를 뚜렷히 구분하고, 제출 버튼은 로딩(is-loading)·성공(is-success) 시 색·텍스트 전환으로 강조합니다. GSAP으로 래퍼·브랜드·카드·필드 진입 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 그리드 데코, 비대칭 래퍼(브랜드 + 카드), 폼 필드·버튼, has-focus/has-value/has-error/is-loading/is-success 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(사이버 미니멀 톤, 비대칭 레이아웃, 상태 변화 강조 스타일).
- `js/login.ts` → `js/login.js`: Alpine 데이터(cyberAsymStateLogin, setFocus/clearFocus, handleSubmit), GSAP 래퍼·브랜드·카드·필드 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
