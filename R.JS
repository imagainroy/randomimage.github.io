const buttons = document.querySelectorAll('.buton')
const  hero = document.querySelector('.hero')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'LM10'){
            const pics = [
                'url("meesi/img1.jpg")',
                'url("meesi/img2.jpg")',
                'url("meesi/img3.jpg")',
                'url("meesi/img4.jpg")',
                'url("meesi/imd.1.jpg")',
                'url("meesi/imd2.jpg")',
            ]
            const pic = document.querySelector('.hero');
            console.log(pic)
            function showImage1() {
                var a = Math.floor(Math.random()*pics.length)
                console.log()
                var img = pics[a];
                console.log(img);
                pic.style.backgroundImage = img
            }
            showImage1()
        }
        
        if(e.target.id === 'CR7'){
            const pics = [
                'url("meesi/img5.jpeg")',
                'url("meesi/img6.jpg")',
                'url("meesi/img7.jpeg")',
                'url("meesi/img7.2.jpg")',
                'url("meesi/img8.jpeg")',
            ]
            const pic = document.querySelector('.hero');
            console.log(pic)
            function showImage2() {
                var a = Math.floor(Math.random()*pics.length)
                console.log()
                var img = pics[a];
                console.log(img);
                pic.style.backgroundImage = img


            }
            showImage2()
        }
        if(e.target.id === 'NJ10'){
            const pics = [
                'url("meesi/img9.jpeg")',
                'url("meesi/img10.jpeg")',
                //'url("meesi/img7.jpeg")',
                //'url("meesi/img8.jpeg")',
                'url("meesi/img11.jpeg")',
                'url("meesi/ima12.jpeg")',
            ]
            const pic = document.querySelector('.hero');
            console.log(pic)
            function showImage3() {
                var a = Math.floor(Math.random()*pics.length)
                console.log()
                var img = pics[a];
                console.log(img);
                pic.style.backgroundImage = img
            }
            showImage3()
        }


    })
})
