import 'babel-polyfill'
import { postDataToServer } from "../client/js/postDataToServer"


global.fetch = jest.fn(() => Promise.resolve({
    json:() => Promise.resolve({res:0})

})

)


it("posts data to the server and gets the post data back",async()=>{
    const returnData = await postDataToServer("someurl",{text:"hello world"});
    expect(returnData.res).toEqual(0);
    expect(fetch).toHaveBeenCalledTimes(1);
    
})