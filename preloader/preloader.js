const container = document.querySelector('.container');
        const output = document.querySelector('.output');
        const fill = document.querySelector('.fill');
        const button = document.querySelector('.button');

        button.addEventListener('click',()=>{
            let a = 0;
            let run ;
            const frames = () =>{
                
                a = a + 1;
                if(a == 101){
                    clearInterval(run);
                    container.style.display = 'none';
                    output.style.display = 'block';
                } else {
                    let counter = document.querySelector('.counter');
                    counter.textContent = a + '%';
                    fill.style.width = a + '%';
                }
            }
            run = setInterval(frames,50);
        })