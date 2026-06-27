# MediCount Website

medicountapp.com 마케팅 사이트 (Astro + Tailwind).

## 개발

```bash
pnpm install
pnpm dev      # 로컬 개발 서버
pnpm build    # dist/ 정적 빌드
pnpm preview  # 빌드 결과 미리보기
```

## 배포

main 브랜치에 push하면 GitHub Actions가 빌드 → GitHub Pages 배포.

### 최초 1회 설정 (수동)
1. GitHub repo Settings → Pages → Source를 "GitHub Actions"로 설정.
2. 커스텀 도메인: Settings → Pages → Custom domain에 `medicountapp.com` 입력(`public/CNAME`이 자동 반영).
3. DNS(도메인 등록처):
   - apex `medicountapp.com` → GitHub Pages A 레코드 4개:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (선택) `www` → CNAME `<org>.github.io`
4. "Enforce HTTPS" 활성화.

## 법적 페이지
`src/pages/terms.astro`, `privacy.astro`는 **초안**이며 공개 전 실제 법률 검토가 필요합니다.
`[[...]]` 플레이스홀더는 회사 정보 확정 후 교체합니다.
