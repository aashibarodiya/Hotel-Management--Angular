import { compare, CompareDirective } from './compare.directive';
describe('CompareDirective', () => {
  it('should create an instance', () => {
    const directive = new CompareDirective();
    expect(directive).toBeTruthy();
  });
it('should compare password',()=>{
  const directive=new CompareDirective();
 expect(compare("1234","1234")).toBeTruthy();
  
})


});