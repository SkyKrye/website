
function say_hi() {
    var fname = document.getElementById('first_name').value;
 
    var html =">>↪" + fname;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('say').addEventListener('click', say_hi);