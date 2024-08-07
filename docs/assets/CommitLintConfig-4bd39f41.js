import{d as r,b as t,c,e as i,f as e,_ as l,w as m,u as o,g as u}from"./index-2da9ee8b.js";const s=`// github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /* rule配置说明:：rule由name和配置数组组成，
    如：'name:[0, 'always', 72]'，
    数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，
    第二位为应用与否，可选always|never，第三位该rule的值。 */
    'type-enum': [
      2,
      'always',
      [
        'feat', // Adds a new feature. 新增feature
        'fix', // Solves a bug. 修复bug
        'build',
        'ci',
        'docs', // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'style', // Improves formatting, white-space. 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
        'refactor', // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        'perf', // Improves performance. 优化相关，比如提升性能、体验
        'test', // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
        'chore' // Other changes
      ]
    ],
    'type-empty': [2, 'never'], // type不为空
    'scope-empty': [2, 'never'], // scope 不为空
    'subject-empty': [2, 'never'], // subject不为空
    'subject-full-stop': [0], // 不校验 subject结尾要加'.'
    'subject-case': [0] // 不校验 subject的格式
  }
};
`,p=u("h2",null,"commitlint的配置",-1),_=r({__name:"CommitLintConfig",setup(d){return(g,f)=>{const n=t("highlightjs"),a=t("CopyWrapper");return c(),i("section",null,[e(l,{title:"git 提交的检测配置",description:"git 提交一般用commitLint插件,这个插件建议用下面的配置"}),p,e(a,{msg:o(s)},{default:m(()=>[e(n,{language:"javascript",code:o(s)},null,8,["code"])]),_:1},8,["msg"])])}}});export{_ as default};
