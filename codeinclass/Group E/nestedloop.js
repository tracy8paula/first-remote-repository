for (let x = 1; x <= 5; x++) {
    let row = '';
    for (let y = 1; y <= x; y++) {
        row += '*';
    }
    console.log(row);
}