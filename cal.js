let str = '';
let bts = document.querySelectorAll('.but');
Array.from(bts).forEach(function(but){
    but.addEventListener('click', (clk) => {
        try{
            if(clk.target.innerHTML == '='){
                str = eval(str);
                document.querySelector('input').value = str;
            }else if (clk.target.innerHTML == 'C') {
                str = '';
                document.querySelector('input').value = str;
            } else {
                str = str + clk.target.innerHTML;
                document.querySelector('input').value = str;
            }
        }
        catch{
            str = 'Please Enter a Valid Value';
            document.querySelector('input').value = str;
        }
    });
});