import type { Config } from 'jest';

const config: Config = {
    // TypeScriptでトランスパイル
    preset: 'ts-jest',

    // Reactコンポーネントを仮想DOMでテストするために必要
    testEnvironment: 'jsdom',

    // setupファイル（jest-domのmatchersなど読み込み）
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // テスト対象ファイルの拡張子
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

    // テスト対象ファイルのパターン
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],

    // トランスパイル処理
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },

    // カバレッジ取得対象（任意）
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],

    // BabelやESM使うときは追加設定も可（今は不要）
};

export default config;
