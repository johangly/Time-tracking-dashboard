const d = document,
    //buttons
    daily = d.querySelector('#daily'),
    weekly = d.querySelector('#weekly'),
    monthly = d.querySelector('#monthly'),
    //work
    workTitle = d.querySelector('#workTitle'),
    workCurrent = d.querySelector('#workCurrent'),
    workPrevius = d.querySelector('#workPrevius'),
    //play
    playTitle = d.querySelector('#playTitle'),
    playCurrent = d.querySelector('#playCurrent'),
    playPrevius = d.querySelector('#playPrevius'),
    //study
    studyTitle = d.querySelector('#studyTitle'),
    studyCurrent = d.querySelector('#studyCurrent'),
    studyPrevius = d.querySelector('#studyPrevius'),
    //exercise
    exerciseTitle = d.querySelector('#exerciseTitle'),
    exerciseCurrent = d.querySelector('#exerciseCurrent'),
    exercisePrevius = d.querySelector('#exercisePrevius'),
    //social
    socialTitle = d.querySelector('#socialTitle'),
    socialCurrent = d.querySelector('#socialCurrent'),
    socialPrevius = d.querySelector('#socialPrevius'),
    //self-care
    selfTitle = d.querySelector('#selfTitle'),
    selfCurrent = d.querySelector('#selfCurrent'),
    selfPrevius = d.querySelector('#selfPrevius');

fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        //button for change to daily stats
        daily.addEventListener('click', e => {
            daily.classList.add('active');
            monthly.classList.remove('active');
            weekly.classList.remove('active');
            //! work 
            workTitle.innerHTML = data[0].title;
            workCurrent.innerHTML = data[0].timeframes.daily.current + 'hrs';
            workPrevius.innerHTML = `last day - ${data[0].timeframes.daily.previous}hrs`;
            //! play 
            playTitle.innerHTML = data[1].title;
            playCurrent.innerHTML = data[1].timeframes.daily.current + 'hrs';
            playPrevius.innerHTML = `last day - ${data[1].timeframes.daily.previous}hrs`;
            //! study 
            studyTitle.innerHTML = data[2].title;
            studyCurrent.innerHTML = data[2].timeframes.daily.current + 'hrs';
            studyPrevius.innerHTML = `last day - ${data[2].timeframes.daily.previous}hrs`;
            //! exercise 
            exerciseTitle.innerHTML = data[3].title;
            exerciseCurrent.innerHTML = data[3].timeframes.daily.current + 'hrs';
            exercisePrevius.innerHTML = `last day - ${data[3].timeframes.daily.previous}hrs`;
            //! social 
            socialTitle.innerHTML = data[4].title;
            socialCurrent.innerHTML = data[4].timeframes.daily.current + 'hrs';
            socialPrevius.innerHTML = `last day - ${data[4].timeframes.daily.previous}hrs`;
            //! self-care 
            selfTitle.innerHTML = data[5].title;
            selfCurrent.innerHTML = data[5].timeframes.daily.current + 'hrs';
            selfPrevius.innerHTML = `last day - ${data[5].timeframes.daily.previous}hrs`;
        });
        //button for change to weekly stats
        weekly.addEventListener('click', e => {
            daily.classList.remove('active');
            monthly.classList.remove('active');
            weekly.classList.add('active');
            //! work 
            workCurrent.innerHTML = data[0].timeframes.weekly.current + 'hrs';
            workPrevius.innerHTML = `last week - ${data[0].timeframes.weekly.previous}hrs`;
            //! play 
            playCurrent.innerHTML = data[1].timeframes.weekly.current + 'hrs';
            playPrevius.innerHTML = `last week - ${data[1].timeframes.weekly.previous}hrs`;
            //! study 
            studyCurrent.innerHTML = data[2].timeframes.weekly.current + 'hrs';
            studyPrevius.innerHTML = `last week - ${data[2].timeframes.weekly.previous}hrs`;
            //! exercise 
            exerciseCurrent.innerHTML = data[3].timeframes.weekly.current + 'hrs';
            exercisePrevius.innerHTML = `last week - ${data[3].timeframes.weekly.previous}hrs`;
            //! social 
            socialCurrent.innerHTML = data[4].timeframes.weekly.current + 'hrs';
            socialPrevius.innerHTML = `last week - ${data[4].timeframes.weekly.previous}hrs`;
            //! self-care 
            selfCurrent.innerHTML = data[5].timeframes.weekly.current + 'hrs';
            selfPrevius.innerHTML = `last week - ${data[5].timeframes.weekly.previous}hrs`;
        });
        //button for change to monthly stats
        monthly.addEventListener('click', e => {
            daily.classList.remove('active');
            monthly.classList.add('active');
            weekly.classList.remove('active');
            //! work 
            workCurrent.innerHTML = data[0].timeframes.monthly.current + 'hrs';
            workPrevius.innerHTML = `last monthly - ${data[0].timeframes.monthly.previous}hrs`;
            //! play 
            playCurrent.innerHTML = data[1].timeframes.monthly.current + 'hrs';
            playPrevius.innerHTML = `last monthly - ${data[1].timeframes.monthly.previous}hrs`;
            //! study 
            studyCurrent.innerHTML = data[2].timeframes.monthly.current + 'hrs';
            studyPrevius.innerHTML = `last monthly - ${data[2].timeframes.monthly.previous}hrs`;
            //! exercise 
            exerciseCurrent.innerHTML = data[3].timeframes.monthly.current + 'hrs';
            exercisePrevius.innerHTML = `last monthly - ${data[3].timeframes.monthly.previous}hrs`;
            //! social 
            socialCurrent.innerHTML = data[4].timeframes.monthly.current + 'hrs';
            socialPrevius.innerHTML = `last monthly - ${data[4].timeframes.monthly.previous}hrs`;
            //! self-care 
            selfCurrent.innerHTML = data[5].timeframes.monthly.current + 'hrs';
            selfPrevius.innerHTML = `last monthly - ${data[5].timeframes.monthly.previous}hrs`;
        });
        //default stats
        //! work 
        workTitle.innerHTML = data[0].title;
        workCurrent.innerHTML = data[0].timeframes.weekly.current + 'hrs';
        workPrevius.innerHTML = `last week - ${data[0].timeframes.weekly.previous}hrs`;
        //! play 
        playTitle.innerHTML = data[1].title;
        playCurrent.innerHTML = data[1].timeframes.weekly.current + 'hrs';
        playPrevius.innerHTML = `last week - ${data[1].timeframes.weekly.previous}hrs`;
        //! study 
        studyTitle.innerHTML = data[2].title;
        studyCurrent.innerHTML = data[2].timeframes.weekly.current + 'hrs';
        studyPrevius.innerHTML = `last week - ${data[2].timeframes.weekly.previous}hrs`;
        //! exercise 
        exerciseTitle.innerHTML = data[3].title;
        exerciseCurrent.innerHTML = data[3].timeframes.weekly.current + 'hrs';
        exercisePrevius.innerHTML = `last week - ${data[3].timeframes.weekly.previous}hrs`;
        //! social 
        socialTitle.innerHTML = data[4].title;
        socialCurrent.innerHTML = data[4].timeframes.weekly.current + 'hrs';
        socialPrevius.innerHTML = `last week - ${data[4].timeframes.weekly.previous}hrs`;
        //! self-care 
        selfTitle.innerHTML = data[5].title;
        selfCurrent.innerHTML = data[5].timeframes.weekly.current + 'hrs';
        selfPrevius.innerHTML = `last week - ${data[5].timeframes.weekly.previous}hrs`;
    });