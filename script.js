
    function showclick() {
        console.log("hello world")
    }

    function showWagwan() {
        console.log("Wagwan brev")
    }

    const btnID = document.getElementById('btnTest');
    const btnW = document.getElementById('btnWagwan')

    const btnStream = Rx.Observable
        .fromEvent(btnID, 'click')
        .subscribe(()=> showclick());
    
    const btnWagwaner = Rx.Observable
        .fromEvent(btnW, 'click')
        .subscribe(() => showWagwan())

    