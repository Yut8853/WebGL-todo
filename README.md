# 爆ToDo - テンション爆上げ WebGLアニメ付きToDoアプリ

モダンな技術スタックをベースに開発している、**視覚効果でテンションが爆上がるToDoアプリ**

## 🚀 使用技術スタック

- Frontend: Next.js / React / TypeScript
- Lint/Format: ESLint (v9) / Prettier / Husky / lint-staged
- Testing: Jest / @testing-library/react
- Styling: SCSS / CSS Modules（予定）
- Animation: WebGL / Three.js / GSAP（予定）
- Infrastructure: Docker / AWS（予定）

## 🔧 開発環境構築済み

- [x] Prettier 自動整形
- [x] ESLint 静的解析
- [x] Husky + lint-staged によるコミット前チェック
- [x] Git 初期化 & 自動整形
- [x] Jest テスト構築（ロジック・UIテスト済）
- [ ] Docker + 本番環境設計（予定）

## ✅ 自動テスト・品質チェック構成

このプロジェクトでは、コミット時に以下が自動で実行されます：

- ✅ ESLint による静的解析（TypeScript + React対応済み）
- ✅ Prettier によるコード整形（ルールは `.prettierrc` に記述）
- ✅ Jest によるテスト実行（ロジック・Reactコンポーネント対応）
- ✅ Husky + lint-staged による commit フック
    - フォーマット・Lint・テストが通らないとコミットできません

### 🔧 テスト実行方法

```bash
yarn test           # 1回だけ実行
yarn test:watch     # 変更監視で継続実行
```
