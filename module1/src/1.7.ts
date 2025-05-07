{
    //spread operator
    //destructuring 

    let broos1: string[] = ['akib', 'sami', 'samiul', 'samiul1'];
    let broos2: string[] = ['jamil', 'jihad', 'somrat'];

    broos1.push(...broos2); //spread operator
    console.log(broos1); //['akib', 'sami', 'samiul', 'samiul1', 'jamil', 'jihad', 'somrat']


    let mentors1 = {
        typesrcipt: 'mezba',
        javascript: 'samiul',
        react: 'sami',
    }

    let mentors2 = {
        redux: 'icchamoti',
        node: 'jorina',
        express:'korina'
    }
    let mentors = {
        ...mentors1,
        ...mentors2
    }


    //Rest operator

    function greetings(friend1: string, friend2: string): void{
        console.log('hi $(friend1) and $(friend2)');

    }
    greetings('sami', 'samiul'); //hi sami and samiul


    function greeting(...friends: string[]):void {
        friends.forEach((friend:string)=>console.log('hi $(friend)'));
    }

    greeting('sami', 'samiul', 'samiul1'); //hi sami, hi samiul, hi samiul1
    







}