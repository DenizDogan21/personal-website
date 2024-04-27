<<<<<<< HEAD
const targets = document.querySelectorAll('.target')

const options = {
    threshold: 0.3
}

const callBack = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        }
        else {
            entry.target.classList.remove('active')
        }
    })
}



const observer = new IntersectionObserver(callBack, options);

targets.forEach((target)=> {
    observer.observe(target)
})

=======
const targets = document.querySelectorAll('.target')

const options = {
    threshold: 0.3
}

const callBack = (entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        }
        else {
            entry.target.classList.remove('active')
        }
    })
}



const observer = new IntersectionObserver(callBack, options);

targets.forEach((target)=> {
    observer.observe(target)
})

>>>>>>> b6c0f94d733f32c2a9b8938fe32edbd27c1bef40
