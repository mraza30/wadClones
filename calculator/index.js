function operation(input) {
    document.getElementById('result').innerHTML += input;
}
function result() {
    data = document.getElementById("result").innerHTML;
    let validCode = 1;
    try {
        eval(data);
    } catch (e) {
        if (e instanceof SyntaxError) {
            validCode = 0;
            console.warn(e.message);
            reset();
        }
    } finally {
        if (validCode) {
            sum = eval(data);
            if (typeof (sum) == "undefined") return;
            document.getElementById("result").innerHTML = sum;
        }
    }
}
function reset() {
    document.getElementById("result").innerHTML = "";
}