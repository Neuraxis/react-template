module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
      description: 'create react component',
      prompts: [{
          type: 'react',
          name: 'name',
          message: 'component name please'
      }],
      actions: [{
          type: 'add',
          path: '../../src/components/{{name}}/{{name}}.js',
          templateFile: './templates/component.hbs'
      }]
  });
  plop.setGenerator('screens', {
    description: 'create react screen',
    prompts: [{
        type: 'react',
        name: 'name',
        message: 'screen name please'
    }],
    actions: [{
        type: 'add',
        path: '../../src/screens/{{name}}/{{name}}.js',
        templateFile: './templates/screen.hbs'
    }]
});
};