export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['ci', 'chore', 'docs', 'ticket', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style'],
    ],
  },
};
