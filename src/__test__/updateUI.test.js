import 'babel-polyfill'
import { updateUI } from '../client/js/updateUI'


global.fetch = jest.fn(() => Promise.resolve({
    json:() => Promise.resolve({
        agreement:"AGREEMENT",
        subjectivity:"SUBJECTIVE",
        confidence:100,
        irony:"IRONIC"})

})
)

it("should fetch data back and update UI",async()=>{
    document.body.innerHTML = `
    <div class="inline" id="agreement"> </div>
    <div class="inline" id="subjectivity"> </div>
    <div class="inline" id="confidence"> </div>
    <div class="inline" id="irony"> </div>
    `
    const returnData = await updateUI("a-test-url");
    // see if this function could successfully fetch data
    expect(returnData.confidence).toEqual(100);
    expect(fetch).toHaveBeenCalledTimes(1);
    // see if successfully update UI
    expect(document.getElementById("agreement").textContent).toMatch(/AGREEMENT/);
  
    
})