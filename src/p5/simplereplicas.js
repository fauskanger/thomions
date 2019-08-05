export const simpleReplicas = p => {

    p.setup = () => {
        p.createCanvas(window.innerWidth, 400);
        p.rectMode(p.CENTER);
        p.textAlign(p.CENTER);

        p.background(33);
    };

    p.draw = () => {
        p.fill(200);
        p.textSize(25);
        p.text('Work in progress', p.width / 2, p.height / 2 - 50);
        p.textSize(20);
        p.text('Please visit again another time.', p.width / 2, p.height / 2 + 50);
    }

};