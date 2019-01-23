import { Component, trigger, state, animate, style, transition, keyframes } from "@angular/core";


@Component({
    moduleId: module.id,
    animations: [
        trigger('toggleElement',[
            state('open', style({ height: '*'})),
            state('closed', style({ height: '0px', 'font-size': '0px'})),

            transition('closed <=> open', [
                animate("3000ms cubic-bezier(0.075, 0.82, 0.165, 1)")
            ])
        ]),
        trigger('animateCitation',[
            transition('stateA <=> stateB',[
                animate(600, keyframes([
                    style({opacity: .5, offset: 0}),
                    style({opacity: 1, color: '#fcb514', offset: .5}),
                    style({opacity: .7, offset: .7}),
                    style({opacity: .1, offset: 1})
                ]))
            ])
        ])

    ],
    selector: 'home',
    templateUrl : 'home.component.html',
    styles: [
                `
                    .frame {margin-bottom: 10px; padding: 10px; border: 5px solid #eeeeee; height: 170px
                    .citations { font-serializePath: 20px; color: #3268ba}
                `
            ]
})
export class HomeComponent {

    open: boolean = true;
    toggleElement: string = "open";

    animateCitation: string = "stateB";
    index: number = 0;

    quotes: quote[] = [
        {
            id: 0,
            text:"aaa aaa",
            author: "toto"
        },
        {
            id: 1,
            text:"bbb aaa",
            author: "tot"
        },
        {
            id: 2,
            text:"ccc aaa",
            author: "titi"
        }
    ];

    quote: quote = this.quotes[0];

    getPreviousQuote(){
        if(this.animateCitation === "stateB"){
            this.animateCitation = "stateA"
        }else{
            this.animateCitation = "stateB"
        }
        this.getSommeQuote(-1);
    }

    getNextQuote(){
        if(this.animateCitation === "stateB"){
            this.animateCitation = "stateA"
        }else{
            this.animateCitation = "stateB"
        }
        this.getSommeQuote(1);
    }

    getSommeQuote(increment: number){
        this.index = this.index + increment;
        if(this.index >= this.quotes.length && increment ===1){
            this.index = 0;
        }
        if(this.index < 0 && increment === -1){
            this.index = this.quotes.length-1;
        }
        this.quote = this.quotes[this.index];
    }

    toggle(){
        this.open = !this.open;
        if(this.open) {
            this.toggleElement = 'open'
        }else{
            this.toggleElement = 'closed'
        }
        
    }

    log(event: any){
        console.log(event);
    }
}

interface quote {
    id: number;
    text: string;
    author: string;
}