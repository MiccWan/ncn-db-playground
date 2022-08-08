import Benchmark from 'benchmark';
import fetchCourseTableByTableId from './prisma_relation';

const suite = new Benchmark.Suite;

suite
  .add('prisma with relation table', {
    defer: true,
    fn: fetchCourseTableByTableId
  })
  .on('complete', function () {
    console.log(this[0].stats)
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .run();
