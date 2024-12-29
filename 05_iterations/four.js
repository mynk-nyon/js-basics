const myObjects = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}
for (const key in myObjects) {
    // console.log(`${key} shortcut is for ${myObjects[key]}`);
}

const programming = ['js', 'cpp', 'python']

for (const key in programming) {
    console.log(programming[key]);
}
