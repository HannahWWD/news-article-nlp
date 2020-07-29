import 'babel-polyfill'
import { checkForInput } from '../client/js/inputChecker'


test('url input returns false', () => {
    expect(checkForInput("https://jestjs.io/docs/en/using-matchers")).toBeFalsy()
});

test('non-english input returns false', () => {
    expect(checkForInput("不是英文")).toBeFalsy()
});


test('empty input returns false', () => {
    expect(checkForInput("")).toBeFalsy()
});

test('normal english returns true', () => {
    expect(checkForInput("this is a sample sentence.")).toBeTruthy()
});