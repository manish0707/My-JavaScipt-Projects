function insert(num)
{
    document.form.output.value = document.form.output.value+num;
}
function equal()
{
    var exp = document.form.output.value;
    if(exp)
        {
            document.form.output.value = eval(exp)
        }
}
function clean()
{
    document.form.output.value = "";   
}