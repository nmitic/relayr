## Getting started

To run the server locally: ```npm run start```

## Prerequisites

To install dependencies: ```npm install```

## Notes

Because I wanted not to mess with binding methods in react constuctor I have installed and setup babel plugin (transform-class-properties) so that I can use arrow methods/functions in class definitions, thus allowing me not to think about context of this as often as I would need if I were not to use it. 
It is stage 2 ES7 propposal --> https://github.com/tc39/proposal-class-fields
Babel plugin --> https://babeljs.io/docs/plugins/transform-class-properties/

I have also installed and setup webpack to use sass loader. This is because I wanted to use BEM as a standard for styling and with sass nesting feature it is little bit easier to style.