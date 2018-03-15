var hi = require('gulp');

hi.task('adminlab', function () {
    console.log('Hello world');
});

hi.task('one', function () {
    console.log('task one');
});

hi.task('two', ['adminlab' , 'one'] , function () {
    console.log('task two');
});